'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView
} from 'react-native';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../../ijoyComponents/color'
import css from '../../../global/css';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class SearchDetail extends Component {
  static navigationOptions = {
    title:'2017年3月款项明细',
    headerStyle:{
      backgroundColor:PrimaryColor
    }
  }
  render(){
    return(
      <View style={css.lessBody}>
        <ScrollView>
          <View style={{height:120,flexDirection:'column',backgroundColor:'white',marginTop:10,}}>
              <View style={{flexDirection:'row',height:30,borderBottomWidth:0.2,padding:5,alignItems:'flex-end'}}>
                <View >
                  <Text style={{fontSize:14}}>养老保险</Text>
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
                      <Text>缴费基数:</Text><Text style={{fontSize:10}}>2110.00</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                      <Text>应缴金额:</Text><Text style={{fontSize:10}}>30</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                      <Text>个人缴纳:</Text><Text style={{fontSize:10}}>10</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                      <Text>公司缴纳:</Text><Text style={{fontSize:10}}>20</Text>
                    </View>

                </View>
                <View style={{flex:1,paddingLeft:10,paddingRight:10,flexDirection:'column',alignItems:'flex-start',justifyContent:'space-around'}}>
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

                </View>

              </View>
          </View>
          <View style={{height:120,flexDirection:'column',backgroundColor:'white',marginTop:10,}}>
              <View style={{flexDirection:'row',height:30,borderBottomWidth:0.2,padding:5,alignItems:'flex-end'}}>
                <View >
                  <Text style={{fontSize:14}}>失业保险</Text>
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
                      <Text>缴费基数:</Text><Text style={{fontSize:10}}>2110.00</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                      <Text>应缴金额:</Text><Text style={{fontSize:10}}>30</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                      <Text>个人缴纳:</Text><Text style={{fontSize:10}}>10</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                      <Text>公司缴纳:</Text><Text style={{fontSize:10}}>20</Text>
                    </View>

                </View>
                <View style={{flex:1,paddingLeft:10,paddingRight:10,flexDirection:'column',alignItems:'flex-start',justifyContent:'space-around'}}>
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

                </View>

              </View>
          </View>
          <View style={{height:120,flexDirection:'column',backgroundColor:'white',marginTop:10,}}>
              <View style={{flexDirection:'row',height:30,borderBottomWidth:0.2,padding:5,alignItems:'flex-end'}}>
                <View >
                  <Text style={{fontSize:14}}>工伤保险</Text>
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
                      <Text>缴费基数:</Text><Text style={{fontSize:10}}>2110.00</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                      <Text>应缴金额:</Text><Text style={{fontSize:10}}>30</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                      <Text>个人缴纳:</Text><Text style={{fontSize:10}}>10</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                      <Text>公司缴纳:</Text><Text style={{fontSize:10}}>20</Text>
                    </View>

                </View>
                <View style={{flex:1,paddingLeft:10,paddingRight:10,flexDirection:'column',alignItems:'flex-start',justifyContent:'space-around'}}>
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

                </View>

              </View>
          </View>
          <View style={{height:120,flexDirection:'column',backgroundColor:'white',marginTop:10,}}>
              <View style={{flexDirection:'row',height:30,borderBottomWidth:0.2,padding:5,alignItems:'flex-end'}}>
                <View >
                  <Text style={{fontSize:14}}>医疗保险</Text>
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
                      <Text>缴费基数:</Text><Text style={{fontSize:10}}>2110.00</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                      <Text>应缴金额:</Text><Text style={{fontSize:10}}>30</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                      <Text>个人缴纳:</Text><Text style={{fontSize:10}}>10</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                      <Text>公司缴纳:</Text><Text style={{fontSize:10}}>20</Text>
                    </View>

                </View>
                <View style={{flex:1,paddingLeft:10,paddingRight:10,flexDirection:'column',alignItems:'flex-start',justifyContent:'space-around'}}>
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

                </View>

              </View>
          </View>
          <View style={{height:120,flexDirection:'column',backgroundColor:'white',marginTop:10,}}>
              <View style={{flexDirection:'row',height:30,borderBottomWidth:0.2,padding:5,alignItems:'flex-end'}}>
                <View >
                  <Text style={{fontSize:14}}>生育保险</Text>
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
                      <Text>缴费基数:</Text><Text style={{fontSize:10}}>2110.00</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                      <Text>应缴金额:</Text><Text style={{fontSize:10}}>30</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                      <Text>个人缴纳:</Text><Text style={{fontSize:10}}>10</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                      <Text>公司缴纳:</Text><Text style={{fontSize:10}}>20</Text>
                    </View>

                </View>
                <View style={{flex:1,paddingLeft:10,paddingRight:10,flexDirection:'column',alignItems:'flex-start',justifyContent:'space-around'}}>
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

                </View>

              </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
