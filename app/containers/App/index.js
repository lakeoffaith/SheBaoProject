import React from 'react';
import {
  View,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import {StackNavigator,TabNavigator,TabView} from 'react-navigation';
import Main from '../../components/Main';
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
      headerMode:'screen',
  },
  CardDetail:{
    name:'CardDetail',
    description:'card to show number code && pay history',
    screen:CardDetailScreen,
  }
};
const UserStack=StackNavigator({
  User:{
    screen:User,
    navigationOptions:()=>({
      headerMode:'none',
    }),
  },
  ShopList:{
    screen:ShopList,
  },
  ShopShow:{
    screen:ShopShow,
  }
},{

});
const TabNav = TabNavigator({
  "首页": {
    screen: Main,
  },
  "附近药店":{
    screen:Shop,
  },
  "我的":{
    screen:UserStack,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,

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
      headerMode:'none',
});
export default MyApp;
