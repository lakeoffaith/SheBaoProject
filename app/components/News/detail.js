import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
}from 'react-native';
import styles from './styles'
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'
import  {ImgUrl} from '../../data/rap'
export default class Detail extends Component{
  static navigationOptions = ({navigation}) => ({
      title: `${navigation.state.params.item.title}`,
      headerStyle:{
        backgroundColor:PrimaryColor
      }
    })
  render(){
    const {state}=this.props.navigation;
    const item=state.params.item;
    return(
      <View style={styles.container}>
        <View style={{marginTop:10,marginBottom:20,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20}}>{item.title}</Text></View>
        <View>
            <Image source={{uri:ImgUrl+item.img}} style={{height:120}}/>
        </View>
        <View style={{marginTop:10}}><Text>    {item.description}</Text></View>
      </View>
    );
  }
}
