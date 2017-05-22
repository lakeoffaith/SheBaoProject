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
    title:'登录',
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    headerStyle:{
      backgroundColor:PrimaryColor,
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
    alert(result.message.success);

    }
  _loginByPhoneAndCode=async ()=>{
    var phone=this.state.phone;
    var code=this.state.code;
    const demo={type:'post',url:'/apiLogin/login',data:{userName:phone,password:code,type:0},out:{save:true,key:'token'}};
    const result= await repository._fetch(demo);
    if(result.success){
      await storage.save({
        key:"user",
        rawData:result.data[0],
      });
      this.props.navigation.navigate("Root");
    }

  }
  render() {
    return (
      <View style={css.lessBody}>
            <ScrollView
            style={{flex:1}}
            keyboardShouldPersistTaps='handled'
            >
            <View style={{marginTop:20,marginLeft:30,marginRight:30}}>
            <View style={{flexDirection:'row',marginTop:10,borderBottomWidth:0.5}}>
              <View style={{width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                <Icon name="account-circle" size={26}/>
              </View>

              <TextInput
              underlineColorAndroid='transparent'
              style={{height: 40,flex:1}}
              placeholder="手机号码"
              //autoFocus={true}//自动获取焦点
              keyboardType='phone-pad'
              onChangeText={(Text)=>this.setState({phone:Text})}
              />
            </View>
            <View style={{flexDirection:'row',marginTop:10,borderBottomWidth:0.5}}>
              <View style={{width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                <Icon name="lock" size={26}/>
              </View>
              <TextInput
              underlineColorAndroid='transparent'
              style={{height: 40,flex:1,borderBottomWidth:0}}
              onChangeText={(Text)=>this.setState({code:Text})}
              />
              <View style={{flex:1,height:40,justifyContent:'center',alignItems:'flex-end'}}>
                <View style={{borderLeftWidth:0.5,paddingLeft:10}}>
                  <TouchableOpacity onPress={()=>this._getCodeByCellPhone()}>
                    <Text>获取验证码</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{flexDirection:'row',marginTop:40}}>
              <View style={{flex:1}}>
              <Button  title="登录"  onPress={()=>this._loginByPhoneAndCode()}/>
              </View>
            </View>
            </View>
            </ScrollView>
            <View style={{flex:1,alignItems:'center',backgroundColor:'gray'}}>
              <Text style={{fontSize:12}}>温馨提示：第一次用手机号登录，登录时将自动注册</Text>
            </View>


      </View>
    );
  }
}

export default Login;
