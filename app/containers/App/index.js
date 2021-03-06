import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Platform,
} from 'react-native';
import '../../data/storage';
import {StackNavigator,TabNavigator,TabView} from 'react-navigation';
 import Main from '../../components/Main';
 import User from '../../components/User';
 import Share from '../../components/User/share';
 import Shop from '../../components/Shop';
import Camera from '../../components/Main/Code';
import Others from '../../components/Main/Others';
import OtherShow from '../../components/Main/Others/show';
import Search from '../../components/Main/Search';
import SearchDetail from '../../components/Main/SearchDetail';
import News from '../../components/News';
import NewsDetail from '../../components/News/detail';
import ShopList from '../../components/Shop/list';
import HotShopList from '../../components/Shop/hot';
import ShopShow from '../../components/Shop/show';
import LoginScreen from '../../components/Login';
import CardDetailScreen from '../../components/CardDetail';
import PayHistoryScreen from '../../components/CardDetail/payHistory';



const GlobalRoutes={
  Login:{
    name:'login',
    description:'login',
    screen:LoginScreen,
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
  HotShopList:{
    screen:HotShopList,
  },
  ShopShow:{
    screen:ShopShow,
  },
  News:{
    screen:News,
  },
  NewsDetail:{
    screen:NewsDetail,
  },
  Camera:{
    screen:Camera,
  },
  Others:{
    screen:Others,
  },
  OtherShow:{
    screen:OtherShow,PayHistoryScreen
  },
  Search:{
    screen:Search,
  },
  SearchDetail:{
    screen:SearchDetail,
  },
  Share:{
    screen:Share
  },
  PayHistory:{
    screen:PayHistoryScreen
  },
};
const TabNav = TabNavigator({
  "Main": {
    screen: Main,
  },
  "NearShop":{
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
});
export default MyApp;
