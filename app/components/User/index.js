import React from 'react';
import {
  View,
  Image,
  Button,
  StyleSheet,
  Text
} from 'react-native';
import css from '../../global/css';
class User extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我的'
  };
  render() {
    return (
      <View style={css.body}>
          <View style={css.titleContainer}>
              <Text>我的</Text>
          </View>
          <View style={styles.headerContainer}>
              <Image source={require('../../img/user.jpg')} style={styles.image}/>
              <View style={styles.profileContainer}>
                  <Text>18228084571</Text>
              </View>
              <View style={{width:40,backgroundColor:'red'}}>
                <Text>跳转</Text>
              </View>
          </View>
          <View style={styles.item}>
            <Text>常去药店</Text>
          </View>
          <View style={styles.item}>
            <Text style={{fontSize:17}}>医保卡号:</Text>
            <Text style={{fontSize:14}}>7839-08457920</Text>
          </View>
          <View style={[styles.item,{marginTop:20}]}>
            <Text style={{fontSize:17}}>我的医保</Text>
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
