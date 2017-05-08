import {
  View,
  Platform,
  NavigationExperimental,
	TouchableWithoutFeedback,
  Image,
  Text ,
  ListView,
  ActivityIndicator
} from 'react-native';
import React, { Component } from 'react';

import DataRepository from '../../data/DataRepository'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import  {ImgUrl} from '../../data/rap'
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'
const repository=new DataRepository();


var resultsCache = {
  dataForQuery: {},
  nextPageNumberForQuery: {},
  totalForQuery: {},
};
var LOADING = {};
class Hospital extends React.Component{
    static navigationOptions = {
      title:'附近促销药店',
      headerStyle:{
        backgroundColor:PrimaryColor
      }
    }
    constructor(){
      super();

      this.state={
        dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        isLoading: false,
       isLoadingTail: false,
       filter: '',
      queryNumber: 0,
      }
    }
   	componentDidMount(){
   		this._fetchHospital('');
   	}
    _fetchHospital=(query)=>{
      this.timeoutID = null;

    this.setState({filter: query});

    var cachedResultsForQuery = resultsCache.dataForQuery[query];
    if (cachedResultsForQuery) {
      if (!LOADING[query]) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(cachedResultsForQuery),
          isLoading: false
        });
      } else {
        this.setState({isLoading: true});
      }
      return;
    }

    LOADING[query] = true;
    resultsCache.dataForQuery[query] = null;
    this.setState({
      isLoading: true,
      queryNumber: this.state.queryNumber + 1,
      isLoadingTail: false,
    });
    repository._getFetch(repository._urlForQueryAndPage('/store/list',query, 1),"","")
      .catch((error) => {
        LOADING[query] = false;
        resultsCache.dataForQuery[query] = undefined;

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows([]),
          isLoading: false,
        });
      })
      .then((responseData) => {
        if(responseData==null){
            LOADING[query] = false;
            resultsCache.dataForQuery[query] = undefined;
            resultsCache.totalForQuery[query] = undefined;
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows([]),
              isLoading: false,
            });
            return;
        }
        LOADING[query] = false;
        resultsCache.totalForQuery[query] = responseData.total;
        resultsCache.dataForQuery[query] = responseData.data;
        resultsCache.nextPageNumberForQuery[query] = 2;

        if (this.state.filter !== query) {
          // do not update state if the query is stale
          return;
        }

        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows(responseData.data)
        });
      })
      .done();
    }

     _renderRowView=(rowData)=>{
       return(
          <View>
              <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("ShopShow")}>
              <View style={{flexDirection:'row',height:140,padding:15,borderBottomWidth:0.5,borderColor:DividerText}}>
                      <View>
                          <Image source={{uri:ImgUrl+rowData.img}} style={{width:80,height:60}}/>
                      </View>
                      <View style={{flex:1,marginLeft:15}}>
                           <View style={{flexDirection:'row'}}><Text style={{color:PrimaryText}}>{rowData.name}</Text><Icon name="attach-money" color={Accent} style={{marginLeft:5}}/><Icon name="local-offer" color={Accent}/></View>
                           <View style={{flexDirection:'row'}}>
                             <Icon name="star" color={Accent}/>
                             <Icon name="star" color={Accent}/>
                             <Icon name="star" color={Accent}/>
                             <Icon name="star" color={Accent}/>
                             <Icon name="star-half" color={Accent}/>
                           </View>

                           <Text style={{color:SecondText}}>{rowData.number}</Text >
                           <Text style={{color:SecondText}} numberOfLines={1}>{rowData.address}</Text>
                           <View style={{flex:1,paddingTop:5,borderTopWidth:0.2}}>
                             <View style={{flexDirection:'row'}}>
                               <Icon name="attach-money" /><Text>68代100元</Text>
                             </View>
                             <View style={{flexDirection:'row'}}>
                               <Icon name="local-offer" /><Text>68代100元</Text>
                             </View>
                           </View>

                      </View>


              </View>
              </TouchableWithoutFeedback>
          </View>
       );
     }
     _renderSeparator=(sectionID,rowID,adjacentRowHighlighted)=>{
       var style = styles.rowSeparator;
         if (adjacentRowHighlighted) {
             style = [style, styles.rowSeparatorHide];
         }
         return (
           <View key={'SEP_' + sectionID + '_' + rowID}  style={style}/>
         );
     }
     renderFooter=()=> {
       if (!this.hasMore() || !this.state.isLoadingTail) {
         return <View style={styles.scrollSpinner} />;
       }

       return <ActivityIndicator style={styles.scrollSpinner} />;
     }
     _onEndReached=()=>{
       var query = this.state.filter;
       if (!this.hasMore() || this.state.isLoadingTail) {
         // We're already fetching or have all the elements so noop
         return;
       }

       if (LOADING[query]) {
         return;
       }

       LOADING[query] = true;
       this.setState({
         queryNumber: this.state.queryNumber + 1,
         isLoadingTail: true,
       });

       var page = resultsCache.nextPageNumberForQuery[query];
         repository._getFetch(repository._urlForQueryAndPage('/store/list',query, page),"","")
         .catch((error) => {
           console.error(error);
           LOADING[query] = false;
           this.setState({
             isLoadingTail: false,
           });
         })
         .then((responseData) => {
           var moviesForQuery = resultsCache.dataForQuery[query].slice();

           LOADING[query] = false;
           // We reached the end of the list before the expected number of results
           if (!responseData.data) {
             resultsCache.totalForQuery[query] = moviesForQuery.length;
           } else {
             for (var i in responseData.data) {
               moviesForQuery.push(responseData.data[i]);
             }
             resultsCache.dataForQuery[query] = moviesForQuery;
             resultsCache.nextPageNumberForQuery[query] += 1;
           }

           if (this.state.filter !== query) {
             // do not update state if the query is stale
             return;
           }

           this.setState({
             isLoadingTail: false,
             dataSource: this.state.dataSource.cloneWithRows(resultsCache.dataForQuery[query]),
           });
         })
         .done();
     }
     hasMore=()=> {
      var query = this.state.filter;
      if (!resultsCache.dataForQuery[query]) {
        return true;
      }
      return (
        resultsCache.totalForQuery[query] !==
        resultsCache.dataForQuery[query].length
      );
    }
    render(){
      var circle=this.state.isLoading?<View style={{flexDirection:'row',height:20}}><Text>正在加载</Text></View>:null;
      var content = this.state.dataSource.getRowCount() === 0 ?
        <NoHospitals
          filter={this.state.filter}
          isLoading={this.state.isLoading}
        /> :
        <ListView
          ref="listview"
          renderSeparator={this._renderSeparator}
          dataSource={this.state.dataSource}
          renderFooter={this.renderFooter}
          renderRow={this._renderRowView}
          onEndReached={this._onEndReached}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps='always'
          showsVerticalScrollIndicator={false}
        />;

        return(
           <View style={styles.container}>
              {circle}
              {content}
           </View>
        );
    }
}

export default Hospital;

class NoHospitals extends React.Component {
  render() {
    var text = '';
    if (this.props.filter) {
      text = `No results for "${this.props.filter}"`;
    } else if (!this.props.isLoading) {
      // If we're looking at the latest movies, aren't currently loading, and
      // still have no results, show a message
      text = '没有医院数据';
    }

    return (
      <View style={[styles.container, styles.centerText]}>
        <Text style={styles.noMoviesText}>{text}</Text>
      </View>
    );
  }
}
