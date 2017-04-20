import React from 'react';
import {
  View,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import {TabNavigator,TabView} from 'react-navigation';
import Main from '../../components/Main';
import User from '../../components/User';
import Shop from '../../components/Shop';


const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = TabNavigator({
  "首页": {
    screen: Main,
  },
  "附近药店":{
    screen:Shop,
  },
  "我的":{
    screen:User,
  }
}, {
  tabBarOptions: {
    showIcon:true,
  },
  tabBarPosition:'bottom'
});
export default MyApp;
