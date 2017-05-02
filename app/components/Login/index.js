import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import css from '../../global/css';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'

//****网络
import DataRepository from '../../data/DataRepository';
const repository=new DataRepository();

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
  };
  constructor(props){
    super(props);
    this.state={
      phone:'',
      code:'',
    };
  };

  _getCodeByCellPhone=()=>{
    var queryString="/apiLogin/getCodeByPhone?"+"phone="+this.state.phone;

    var get="";
    var save="";
    repository._getFetch(queryString,getKey,saveKey)
    .then(result=>{
          alert('验证码为:'+result);
      }
    )
    .catch((error)=>{
          alert(error);
        })
    .done();
  };
  _loginByPhoneAndCode=()=>{
    _this=this;
    var queryString="/apiLogin/getTokenByPhoneAndCode?"+"phone="+this.state.phone+"&"+"code="+this.state.code;
    var get="";
    var save="token";
    repository._getFetch(queryString,getKey,saveKey)
    .then(ret=>{
      _this.props.navigation.navigate("Root")
    })
    .catch((error)=>{
        alert(error);
      })
    .done();


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
              onChangeText={(Text)=>this.setState({phone:Text})}
              />
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                <Icon name="lock" size={26}/>
              </View>
              <TextInput
              style={{height: 40,flex:1}}
              onChangeText={(Text)=>this.setState({code:Text})}
              />
              <View style={{flex:1,height:40,justifyContent:'center',alignItems:'center'}}>
                <Button onPress={()=>this._getCodeByCellPhone()} title="获取验证码"></Button>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
              <Button  title="登   录" style={{width:200}} onPress={()=>this._loginByPhoneAndCode()}/>
            </View>
            </ScrollView>


      </View>
    );
  }
}

export default Login;
