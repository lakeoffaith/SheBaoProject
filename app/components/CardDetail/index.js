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
            <View style={{flex:1,flexDirection:'column',borderWidth:1,margin:20}}>
                <View style={{height:80,margin:40,borderWidth:1,backgroundColor:'green',flexDirection:'column',justifyContent:'center'}}>
                    <Text>11112443511124435111244351</Text>
                </View>

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
