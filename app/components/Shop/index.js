import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import css from '../../global/css';
import IJoyAmapView from '../ijoyComponents/IJoyAmapView';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Shop extends React.Component {
  static navigationOptions = {
    header:null,
    tabBarLabel: '药店',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name='store' size={26}/>
    ),
  };

  render() {
    return (
      <View style={css.lessBody}>
        <View style={[css.titleContainer]}>
            <View style={css.title}><Text>附近医院</Text></View>
        </View>
        <View style={{flex:1}}>
            <IJoyAmapView style={{flex:1}}/>
        </View>
      </View>
    );
  }
}

export default Shop;
