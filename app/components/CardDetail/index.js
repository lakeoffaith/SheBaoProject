import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import css from '../../global/css';
import Barcode from 'react-native-barcode-builder';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'
class CardDetail extends React.Component {
  static navigationOptions = {
    title:'向药店支付',
    headerStyle:{
      backgroundColor:PrimaryColor
    }
  };
  render() {
    return (
      <View style={css.lessBody}>
            <View style={{flex:1,flexDirection:'column',margin:60}}>

                    <Barcode value="Hello World" format="CODE128" />


            </View>

      </View>
    );
  }
}

const styles=StyleSheet.create({

  MoreContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:30,
    borderBottomWidth:0.4,
  }
});
export default CardDetail;
