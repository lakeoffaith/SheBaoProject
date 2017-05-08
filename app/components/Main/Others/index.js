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
    title:'更多功能',
    headerStyle:{
      backgroundColor:PrimaryColor
    }
  }
  render(){
    return(
      <View style={css.body}>
          <View style={{height:120,flexDirection:'column',backgroundColor:'white',marginTop:10,}}>
              <View style={{flexDirection:'row',height:30,borderBottomWidth:0.2,padding:5}}>
                <View>
                  <Text>相关网站</Text>
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
          <View style={{height:120,flexDirection:'column',backgroundColor:'white',marginTop:10,}}>
              <View style={{flexDirection:'row',height:30,borderBottomWidth:0.2,padding:5}}>
                <View>
                  <Text>相关APP</Text>
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
          <View style={{height:120,flexDirection:'column',backgroundColor:'white',marginTop:10,}}>
              <View style={{flexDirection:'row',height:30,borderBottomWidth:0.2,padding:5}}>
                <View>
                  <Text>相关公众号</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',flex:1,paddingTop:10,}}>
                <View style={{marginLeft:10,marginRight:10,width:70,height:40,backgroundColor:PrimaryColor,borderRadius:10,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <Icon onPress={()=>{this.props.navigation.navigate("OtherShow")}} name="search" size={18}></Icon>
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
