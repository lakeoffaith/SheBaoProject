import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import css from '../../../global/css';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor,TextIcons} from '../../ijoyComponents/color'
class OtherShow extends React.Component {
  static navigationOptions = {
    title:'四川在线微信',
    headerStyle:{
      backgroundColor:PrimaryColor
    }
  }

  render() {
    return (
      <View style={css.lessBody}>
            <View style={{flex:1,flexDirection:'column',margin:20,alignItems:'center',justifyContent:'center'}}>
                <View >
                  <Image source={require('../../../img/code.png')} style={{height:200,width:200}}>

                  </Image>
                </View>
                <View>
                  <Text>四川在线微信号</Text>
                  <Text>微信号:jiankanchengdu</Text>
                </View>
            </View>

      </View>
    );
  }
}


export default OtherShow;
