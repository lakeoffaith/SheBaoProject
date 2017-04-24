import React from 'react';
import {
  View,
  Image,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import css from '../../global/css';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AweIcon from 'react-native-vector-icons/FontAwesome';
class User extends React.Component {
  static navigationOptions = {
    header: {visible: false},
    tabBar:{
      label:'首页',
      icon:({tintColor,focused})=>(
        <Icon name='perm-identity' size={26}/>
      ),
    },
  };
  render() {
    return (
      <View style={css.body}>
          <View style={[css.titleContainer,{borderBottomWidth:0.5,}]}>
              <Text>我的</Text>
          </View>
          <View style={styles.headerContainer}>
              <Image source={require('../../img/user.jpg')} style={styles.image}/>
              <View style={styles.profileContainer}>
                  <TouchableOpacity   onPress={()=>this.props.navigation.navigate("Login")}><View><Text>登录/注册</Text></View></TouchableOpacity>
              </View>
              <View style={{width:40}}>
                <Icon name="trending-flat" size={16} color="#900" style={{marginRight:10,justifyContent:'flex-end'}}/>
              </View>
          </View>
          <View style={styles.item}>
            <Icon name="store" size={18} color="#900" style={{marginRight:10}} onPress={()=>this.props.navigation.navigate("ShopList")} /><Text>常去药店</Text>
          </View>
          <View style={styles.item}>
            <AweIcon name="vcard" size={16} color="#900" style={{marginRight:10}}/><Text>医保卡号:</Text>
            <Text >7839-08457920</Text>
          </View>
          <View style={[styles.item,{marginTop:20}]}>
            <Icon name="tab" size={18} color="#900" style={{marginRight:10}}/><Text style={{fontSize:17}}>我的医保</Text>
            <Icon name="trending-flat" onPress={()=>this.props.navigation.navigate("CardDetail")} size={16} color="#900" style={{marginRight:10,justifyContent:'flex-end'}}/>
          </View>
          <View style={[styles.item,{marginTop:20}]}>
            <Icon name="share" size={18} color="#900" style={{marginRight:10}}/><Text style={{fontSize:17}}>分享</Text>
          </View>

      </View>
    );
  }
}
const styles=StyleSheet.create({
  headerContainer:{
    flexDirection:'row',
    height:100,
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:0.5,
  },
  image:{
    width:60,
    height:60,
    marginLeft:10,
    marginRight:10,
  },
  profileContainer:{
    flex:1,
    marginLeft:10,
  },
  item:{
    flexDirection:'row',
    padding:10,
    height:45,
    alignItems:'center',
    borderBottomWidth:0.4
  },

})

export default User;
