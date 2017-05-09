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
    headerStyle:{
      backgroundColor:PrimaryColor
    }
  };
  constructor(props){
    super(props);
    this.state={
      phone:'',
      code:'',
    };
  };

  _getCodeByCellPhone=async ()=>{
    var phone=this.state.phone;
    const demo={type:'get',url:'/apiLogin/getCodeByPhone',data:{qStr:'phone='+phone},out:{save:false}};
    const result=await repository._fetch(demo);
    alert(result.data);

    }
  _loginByPhoneAndCode=async ()=>{
    var phone=this.state.phone;
    var code=this.state.code;
    const demo={type:'get',url:'/apiLogin/getTokenByPhoneAndCode',data:{qStr:'phone='+phone+'&'+'code='+code},out:{save:true,key:'token'}};
    repository._fetch(demo);
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
