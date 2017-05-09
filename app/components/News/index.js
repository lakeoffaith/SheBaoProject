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
import  FocusImage from '../utils/bannerTwo';
import DataRepository from '../../data/DataRepository'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import  {ImgUrl} from '../../data/rap'
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'
const repository=new DataRepository();


var resultsCache = {
  dataForQuery: {},
  nextPageNumberForQuery: {},
  totalForQuery: {},
};
var LOADING = {};
class News extends React.Component{

    static navigationOptions = {
      title:'所有新闻',
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
        queryNumber: 0,
      }
    }
   	componentDidMount(){
   		this._fetchHospital();
   	}
    _fetchHospital=async ()=>{
      this.timeoutID = null;
    this.setState({
      isLoading: true,
      queryNumber: this.state.queryNumber + 1,
      isLoadingTail: false,
    });

    const demo={type:'get',url:'/info/list',data:{qStr:'q=',page:1,pageSize:10},out:{save:true,key:'News'}};
    var resultDemo=await repository._fetch(demo);
    console.log(resultDemo);
    this.setState({
        isLoading: false,
        dataSource: this.state.dataSource.cloneWithRows(resultDemo.data)
      });
    // if(resultDemo==null){
    //   LOADING[query] = false;
    //   resultsCache.dataForQuery[query] = undefined;
    //   resultsCache.totalForQuery[query] = undefined;
    //
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows([]),
    //     isLoading: false,
    //   });
    // }else{
    //   LOADING[query] = false;
    //   resultsCache.totalForQuery[query] = resultDemo.total;
    //   resultsCache.dataForQuery[query] = resultDemo.data;
    //   resultsCache.nextPageNumberForQuery[query] = 2;
    //   if (this.state.filter !== query) {
    //     // do not update state if the query is stale
    //     return;
    //   }
    //   this.setState({
    //     isLoading: false,
    //     dataSource: this.state.dataSource.cloneWithRows(resultDemo.data)
    //   });
    // }
  }

     _renderRowView=(rowData)=>{
       return(
          <View>
              <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("NewsDetail")}>
              <View style={{flexDirection:'row',height:100,padding:15,borderBottomWidth:0.5,borderColor:DividerText}}>
                      <View>
                          <Image source={{uri:ImgUrl+rowData.img}} style={{width:80,height:60}}/>
                      </View>
                      <View style={{flex:1,marginLeft:15}}>
                           <Text style={{color:PrimaryText}}>{rowData.title}</Text>
                           <Text style={{color:SecondText}}>{rowData.keywords}</Text >
                           <Text style={{color:SecondText}} numberOfLines={1}>{rowData.description}</Text>
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
     _onEndReached=async ()=>{
       console.log("触发onEndReached");
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
       const demo={type:'get',url:'/info/list',data:{qStr:'q='+query,page:1,pageSize:10},out:{save:true,key:'News'}};
       var resultDemo=await repository._fetch(demo);
       if(resultDemo==null){
         LOADING[query] = false;
         resultsCache.dataForQuery[query] = undefined;
         resultsCache.totalForQuery[query] = undefined;

         this.setState({
           dataSource: this.state.dataSource.cloneWithRows([]),
           isLoading: false,
         });
       }else{
         LOADING[query] = false;
         resultsCache.totalForQuery[query] = resultDemo.total;
         resultsCache.dataForQuery[query] = resultDemo.data;
         resultsCache.nextPageNumberForQuery[query] = 2;
         if (this.state.filter !== query) {
           // do not update state if the query is stale
           return;
         }
         this.setState({
           isLoading: false,
           dataSource: this.state.dataSource.cloneWithRows(resultDemo.data)
         });
       }
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
             <View style={{flexDirection:'row',height:100}}>
                 <FocusImage />
             </View>
             {circle}
              {content}
           </View>
        );
    }
}


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

module.exports=News;
