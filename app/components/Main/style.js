import {
  StyleSheet
} from 'react-native';

const styles=StyleSheet.create({
      leftTitle:{
        marginLeft:10,
        marginRight:10,
        width:50,
      },

      rightTitle:{
        marginRight:10,
        marginLeft:10,
      },
      scrollViewContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
        height:150,
      },
      othersContainer:{
        flex:1,
        padding:5,
        marginTop:30,
        marginBottom:25,
        marginLeft:20,
        marginRight:20,
        flexDirection:'column',
      },
      cuboidContainer:{
        flex:1,
        height:80,
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
