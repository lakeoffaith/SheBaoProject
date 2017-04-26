'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../../ijoyComponents/color'
import css from '../../../global/css';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class Others extends Component {
  static navigationOptions = {
    title:'明细查询',
    header: (navigation, defaultHeader) => {
      console.log("----");
      console.log(defaultHeader);
      console.log(navigation);
      return(
        {
          style:{
            backgroundColor:PrimaryColor,
          }
        }
      );

      }
  }
  render(){
    return(
      <View style={css.body}>
        <View style={{height:30,flexDirection:'row',alignItems:'flex-end',backgroundColor:'gray'}}>
            <View style={{marginLeft:20,height:30,borderBottomWidth:1,justifyContent:'center'}}>
              <Text style={{fontSize:10}}>已缴纳</Text>
            </View>
            <View style={{marginLeft:20,height:30,justifyContent:'center'}}>
              <Text style={{fontSize:10}}>未缴纳</Text>
            </View>
        </View>
        <View style={{height:120,flexDirection:'column',backgroundColor:'white',marginTop:10,}}>
            <View style={{flexDirection:'row',height:30,borderBottomWidth:0.2,padding:5}}>
              <View justifyContent="flex-start">
                <Text style={{fontSize:10}}>2017年3月</Text>
              </View>
              <View alignItems="flex-end">
                <Text style={{fontSize:10}}>已缴纳</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',flex:1,paddingTop:10,}}>
              <View style={{marginLeft:10,marginRight:10,width:70,height:40,backgroundColor:PrimaryColor,borderRadius:10,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                  <Icon name="search" size={18}></Icon>
                  <Text style={{fontSize:12}}>四川社保网</Text>
              </View>
              <View style={{marginLeft:10,marginRight:10,width:70,height:40,backgroundColor:PrimaryColor,borderRadius:10,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                  <Icon name="search" size={18}></Icon>
                  <Text style={{fontSize:12}}>四川社保网</Text>
              </View>
              <View style={{marginLeft:10,marginRight:10,width:70,height:40,backgroundColor:PrimaryColor,borderRadius:10,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                  <Icon name="search" size={18}></Icon>
                  <Text style={{fontSize:12}}>四川社保网</Text>
              </View>
              <View style={{marginLeft:10,marginRight:10,width:70,height:40,backgroundColor:PrimaryColor,borderRadius:10,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                  <Icon name="search" size={18}></Icon>
                  <Text style={{fontSize:12}}>四川社保网</Text>
              </View>

            </View>
        </View>
      </View>
    );
  }
}
