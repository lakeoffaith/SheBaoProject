import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import css from '../../global/css';
class Shop extends React.Component {
  static navigationOptions = {
    tabBarLabel: '药店',
    showIcon:true,
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: (focused,tintColor) => {
      return <View><Text>nihao</Text></View>
    },
  };

  render() {
    return (
      <View style={css.body}>
        <View style={[css.titleContainer,{backgroundColor:'gray'}]}>
            <View style={css.title}><Text>附近医院</Text></View>
        </View>
        <View style={{flex:1,backgroundColor:'red'}}>

        </View>
      </View>
    );
  }
}

export default Shop;
