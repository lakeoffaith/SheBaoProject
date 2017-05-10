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
  data:null,
  page:1,
  total: 0,
  pageSize:10,
};
var LOADING;
class PayHistory extends React.Component{

    static navigationOptions = {
      title:'历史消费信息',
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
        queryNumber:0,
      }
    }
   	componentDidMount(){
      console.log("componentDidMount");
   		this._fetchHospital();
   	}
    _fetchHospital=async ()=>{
      this.setState({filter:''});
      if(resultsCache.data){
         if(!LOADING){
           this.setState({
             dataSource:this.state.dataSource.cloneWithRows(resultsCache.data),
             isLoading:false,
           });
         }else{
           this.setState({isLoading:true});
         }
         return;
      }
      LOADING=true;
      resultsCache.data=null;
      this.setState({
        isLoading:true,
        queryNumber: this.state.queryNumber + 1,
        isLoadingTail: false,
      })
    const demo={type:'get',url:'/info/list',data:{qStr:'q=',page:1,pageSize:10},out:{save:true,key:'News'}};
    var resultDemo=await repository._fetch(demo);
    if(resultDemo==null){
      LOADING=false;
      resultsCache.data=undefined;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows([]),
        isLoading: false,
      })
    }else{
        LOADING=false;
        resultsCache.data=resultDemo.data;
        resultsCache.total=resultDemo.total;
        resultsCache.page=2;
        this.setState({
            isLoading: false,
            dataSource: this.state.dataSource.cloneWithRows(resultDemo.data)
          });
    }
  }

     _renderRowView=(rowData)=>{
       return(
          <View>
              <View style={{flexDirection:'row',height:50,padding:15,borderBottomWidth:0.5,borderColor:DividerText,justifyContent:'space-between'}}>
                  <View ><Text style={{color:PrimaryText}}>xxx药店</Text></View>
                  <View ><Text style={{color:SecondText}}>-25</Text></View>
                  <View ><Text style={{color:SecondText}} numberOfLines={1}>2017-07-09:13:25:24</Text></View>
              </View>
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
     _onEndReached= async ()=>{
       if(!this.hasMore() || this.state.isLoadingTail){
         return;
       }
       if(LOADING)return;
       LOADING=true;
       this.setState({isLoadingTail:true,queryNumber:this.state.queryNumber+1})
       var page=resultsCache.page;
       const demo={type:'get',url:'/info/list',data:{qStr:'q=',page:page,pageSize:10},out:{save:true,key:'News'}};
       var resultDemo=await repository._fetch(demo);
       if(resultDemo==null){
          LOADING=false;
          this.setState({isLoadingTail:false});
       }else{
         var moviesForQuery=resultsCache.data.slice();
         LOADING=false;
         if(!resultDemo.data){
           resultsCache.total=moviesForQuery.length;
         }else{
           for(var i in resultDemo.data){
             moviesForQuery.push(resultDemo.data[i]);
           }
           resultsCache.data=moviesForQuery;
           resultsCache.page+=1;
         }
         this.setState({
             dataSource: this.state.dataSource.cloneWithRows(resultsCache.data),
             isLoadingTail:false,
           });
       }
     }
     hasMore=()=> {
      if (!resultsCache.dataForQuery) {
        return true;
      }
      return (
        resultsCache.totalForQuery !==
        resultsCache.dataForQuery.length
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
          onEndReachedThreshold={40}
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

module.exports=PayHistory;
