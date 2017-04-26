import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import css from '../../global/css';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'
class CardDetail extends React.Component {
  static navigationOptions = {
    title:'医保卡',
    header: (navigation, defaultHeader) => {
      console.log("----");
      console.log(defaultHeader);
      console.log(navigation);
      return(
        {
          style:{
            backgroundColor:PrimaryColor,
          }
        }
      );

      }
  }

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
