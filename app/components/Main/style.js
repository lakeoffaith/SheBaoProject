import {
  StyleSheet
} from 'react-native';
import {width,height} from '../../global/layout';
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
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
        height:Sone,
      },
      othersContainer:{
        height:Stwo,
        padding:5,
        marginTop:30,
        marginBottom:25,
        marginLeft:20,
        marginRight:20,
        flexDirection:'column',
      },
      cuboidContainer:{
        flex:1,
        height:(Stwo-50)/2,
        borderWidth:0.4,
        marginTop:10,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
      },
      centerCircleContainer:{
        position:'absolute',
        left:130,
        top:70,
        width:80,
        height:80,
        borderRadius:20,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',

      }
});

export default styles;
