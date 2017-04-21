import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import css from '../../global/css';
class Show extends React.Component {
  render() {
    return (
      <View style={css.body}>
        <Text>单个页面</Text>
      </View>
    );
  }
}

export default Show;
