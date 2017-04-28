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
      <View style={css.lessBody}>
        <View style={{height:30,flexDirection:'row',alignItems:'flex-end',backgroundColor:'gray'}}>
            <View style={{marginLeft:20,height:30,borderBottomWidth:1,justifyContent:'center'}}>
              <Text style={{fontSize:10}}>已缴纳</Text>
            </View>
            <View style={{marginLeft:20,height:30,justifyContent:'center'}}>
              <Text style={{fontSize:10}}>未缴纳</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end'}}>
                <Text style={{marginRight:10}}>2017</Text>
            </View>
        </View>
        <View style={{height:120,flexDirection:'column',backgroundColor:'white',marginTop:10,}}>
            <View style={{flexDirection:'row',height:30,borderBottomWidth:0.2,padding:5,alignItems:'flex-end'}}>
              <View >
                <Text style={{fontSize:10}}>2017年3月</Text>
              </View>
              <View style={{marginLeft:30}}>
                <Text style={{fontSize:10}}>总金额:<Text style={{color:Accent}}>2103.70</Text></Text>

              </View>
              <View style={{marginLeft:30}}>
                <Text style={{fontSize:10}}>+300</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',flex:1,paddingTop:10,}}>
              <View style={{flex:1,paddingLeft:10,paddingRight:10,flexDirection:'column',alignItems:'flex-start',justifyContent:'space-around',borderRightWidth:0.2}}>
                  <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <Text>应缴金额:</Text><Text style={{fontSize:10}}>300</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                    <Text>个人缴纳:</Text><Text style={{fontSize:10}}>100</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                    <Text>公司缴纳:</Text><Text style={{fontSize:10}}>200</Text>
                  </View>

              </View>
              <View style={{flex:1,paddingLeft:10,paddingRight:10,flexDirection:'column',alignItems:'flex-start',justifyContent:'space-around',borderRightWidth:0.2}}>
                  <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                    <Text>到账日期:</Text><Text style={{fontSize:10}}>2017/03/24</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <Text>款项:</Text><Text style={{fontSize:10}}>单位缴纳</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                    <Text>类型:</Text><Text style={{fontSize:10}}>单位正常应缴</Text>
                  </View>
              </View>
              <View style={{flex:0.5,paddingLeft:10,paddingRight:10,flexDirection:'column',alignItems:'flex-end',justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row',alignItems:'flex-end',backgroundColor:'gray'}}>
                    <Text>已缴纳</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                      <Icon name="last-page" onPress={()=>this.props.navigation.navigate("SearchDetail")} size={17} />
                  </View>
              </View>

            </View>
        </View>
      </View>
    );
  }
}
