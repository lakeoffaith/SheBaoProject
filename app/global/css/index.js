import {
  StyleSheet
}from 'react-native';
import {width,height} from '../../global/layout';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor,TextIcons} from '../../components/ijoyComponents/color'
const css=StyleSheet.create({
  body:{
    flexDirection:'column',
    height:height,
  },
  titleContainer:{
    flexDirection:'row',
    height:height/16,
    justifyContent:'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:PrimaryColor,

  },
  title:{
    flex:1,
    alignItems:'center',

  },
});

export default css;
