import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import css from '../../global/css';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'
class Login extends React.Component {

  static navigationOptions = {
    title:'登录界面',
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

  render() {
    return (
      <View style={css.body}>
            <ScrollView
            keyboardShouldPersistTaps='handled'
            >
            <View style={{flexDirection:'row'}}>


              <View style={{width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                <Icon name="account-circle" size={26}/>
              </View>

              <TextInput
              style={{height: 40,flex:1}}
              placeholder="手机号码"
              keyboardType='phone-pad'
              />
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                <Icon name="lock" size={26}/>
              </View>
              <TextInput
              style={{height: 40,flex:1}}
              placeholder="验证码"
              keyboardType='phone-pad'
              />
              <View style={{flex:1,height:40,justifyContent:'center',alignItems:'center'}}>
                <Button title="获取验证码"></Button>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
              <Button  title="登   录" style={{width:200}} onPress={()=>this.props.navigation.navigate("Main")}/>
            </View>
            </ScrollView>


      </View>
    );
  }
}

export default Login;
