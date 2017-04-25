import {
  StyleSheet
} from 'react-native';
import {width,height} from '../../global/layout';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor,TextIcons} from '../ijoyComponents/color'
const Sone=height*5/16;
const Stwo=height*6/16;
const styles=StyleSheet.create({
      leftTitle:{
        justifyContent:'flex-start',
        marginLeft:5,
        marginRight:10,
        width:80,
        flexDirection:'row',
        alignItems:'center',
      },

      rightTitle:{
        justifyContent:'flex-end',
        marginRight:10,
        marginLeft:5,
        width:80,
        flexDirection:'row',
        alignItems:'center',
      },
      scrollViewContainer:{
        flexDirection:'row',
        height:Sone,
      },
      othersContainer:{
        height:Stwo,
        marginTop:30,
        marginBottom:25,
        marginLeft:20,
        marginRight:20,
        flexDirection:'column',

      },
      cuboidContainer:{
        flex:1,
        marginTop:10,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:PrimaryColor,
        borderRadius:10,
      },
      centerCircleContainer:{
        position:'absolute',
        left:(width-20*2-80)/2,
        top:(Stwo-80)/2,
        width:80,
        height:80,
        borderRadius:20,
        backgroundColor:LightPrimaryColor,
        justifyContent:'center',
        alignItems:'center',

      }
});

export default styles;
