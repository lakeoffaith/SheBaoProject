import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import css from '../../global/css';
class CardDetail extends React.Component {


  render() {
    return (
      <View style={css.body}>
        <View style={[css.titleContainer,{backgroundColor:'gray'}]}>
            <View style={css.title}><Text>医保卡详细</Text></View>
        </View>

      </View>
    );
  }
}

export default CardDetail;
