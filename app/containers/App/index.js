import React from 'react';
import {
  View,
  Image,
  Button,
  StyleSheet,
  Platform,
} from 'react-native';
import '../../data/storage';
import {StackNavigator,TabNavigator,TabView} from 'react-navigation';
import Main from '../../components/Main';
import Camera from '../../components/Main/Code';
import Others from '../../components/Main/Others';
import Search from '../../components/Main/Search';
import News from '../../components/News';
import User from '../../components/User';
import Shop from '../../components/Shop';
import ShopList from '../../components/Shop/list';
import ShopShow from '../../components/Shop/show';
import LoginScreen from '../../components/Login';
import CardDetailScreen from '../../components/CardDetail';


const GlobalRoutes={
  Login:{
    name:'login',
    description:'login',
    screen:LoginScreen,
      headerMode:'none',
  },
  CardDetail:{
    name:'CardDetail',
    description:'card to show number code && pay history',
    screen:CardDetailScreen,
    title:'社保卡详细',
  },
  ShopList:{
    screen:ShopList,
  },
  ShopShow:{
    screen:ShopShow,
  },
  News:{
    screen:News,
  },
  Camera:{
    screen:Camera,
  },
  Others:{
    screen:Others,
  },
  Search:{
    screen:Search,
  }
};
const TabNav = TabNavigator({
  "Main": {
    screen: Main,
  },
  "附近药店":{
    screen:Shop,
  },
  "User":{
    screen:User,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions:{
    showIcon:true,
    activeTintColor: '#fff',
  },

});


const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = StackNavigator({
    ...GlobalRoutes,
    Root:{
      screen:TabNav,
    }

}, {
    initialRouteName:'Root',
      headerMode:'screen',
      header:{
          style:{
            backgroundColor:'red',
          }
      },




});
export default MyApp;
