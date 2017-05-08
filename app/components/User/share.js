import React,{Component} from 'react';
import {
  View,
  Image,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor,TextIcons} from '../../components/ijoyComponents/color'
import css from '../../global/css';
export default class Share extends Component{
  static navigationOptions = {
    title:'分享',
    tabBarLabel: '分享',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name='perm-identity' size={26}/>
    ),
    headerStyle:{
      backgroundColor:PrimaryColor,
    }
  };
  render(){
    return(
      <View style={css.body}>
          <View style={{height:120,flexDirection:'column',backgroundColor:'white',marginTop:10,}}>

              <View style={{flexDirection:'row',flex:1,alignItems:'center',justifyContent:'center'}}>
                <View style={{marginLeft:10,marginRight:10,width:70,height:40,backgroundColor:PrimaryColor,borderRadius:10,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <Icon name="qq" size={18}></Icon>
                    <Text style={{fontSize:12}}>qq</Text>
                </View>
                <View style={{marginLeft:10,marginRight:10,width:70,height:40,backgroundColor:PrimaryColor,borderRadius:10,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <Icon name="weixin" size={18}></Icon>
                    <Text style={{fontSize:12}}>微信</Text>
                </View>
                <View style={{marginLeft:10,marginRight:10,width:70,height:40,backgroundColor:PrimaryColor,borderRadius:10,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <Icon name="weibo" size={18}></Icon>
                    <Text style={{fontSize:12}}>新浪微博</Text>
                </View>
              </View>
          </View>
      </View>
    );
  }
}
