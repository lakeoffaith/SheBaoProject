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
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor,TextIcons} from '../ijoyComponents/color'
import {width,height} from '../../global/layout';
class Show extends React.Component {
  render() {
    return (
      <View style={css.body}>
        <View style={styles.headerContainer}>
            <View style={styles.imageContainer}>
              <Image source={require('../../img/store.jpg')} style={styles.image}/>
            </View>
            <View style={styles.InfoContainer}>
               <Text><Text style={{color:PrimaryText}}>中洋大药房</Text> <Text style={{color:SecondText}}>好评</Text></Text>
               <Text style={{color:SecondText}}>成都市人和大道三路口站旁</Text>
            </View>
            <View style={styles.ScoreContainer}>
                <Text style={{color:PrimaryText}}>90</Text>
                <Text style={{color:SecondText}}>热度</Text>
            </View>
        </View>
        <View style={styles.TagsContiner}>
            <View style={styles.tag}>
              <Text style={{fontSize:14,backgroundColor:Accent,padding:5}}>诚信药店</Text>
            </View>
            <View style={styles.tag}>
              <Text style={{fontSize:14,backgroundColor:Accent,padding:5}}>月最佳店铺</Text>
            </View>
            <View style={styles.tag}>
              <Text style={{fontSize:14,backgroundColor:Accent,padding:5}}>社保药店</Text>
            </View>
        </View>

        <View style={styles.InfoBigContainer}>
            <View style={{width:60,alignItems:'center'}}>
              <View style={{width:40}}>
                <Text style={{color:PrimaryText}}>药房简介</Text>
              </View>
            </View>
            <View style={{flex:1,marginLeft:10}}>
              <Text style={{color:SecondText,fontSize:12}}>
                德仁堂集团是以医药、餐饮、地产为主业的集团性公司。依拖其管理优势、体制优势以及人才和资金优势，对医药行业进行投资...
              </Text>
            </View>

        </View>
        <View style={styles.DragsContainer}>
            <ScrollView>
              <View style={styles.DragItem}>
                      <View>
                          <Image source={require('../../img/drag.jpg')} style={{width:80,height:60}}/>
                      </View>
                      <View style={styles.DragItemInfoContainer}>
                           <Text style={{color:PrimaryText}}>感冒药</Text>
                           <View style={{flexDirection:'row'}}>
                                <View style={{width:50}}>
                                  <Text>52.90</Text>
                                  <Text>32.90</Text>
                                </View>
                                <View style={styles.DragNumberContainer}>
                                  <Text style={{color:PrimaryText}}>热卖 1000盒</Text >
                                </View>

                           </View>
                      </View>
              </View>
              <View style={styles.DragItem}>
                      <View>
                          <Image source={require('../../img/drag.jpg')} style={{width:80,height:60}}/>
                      </View>
                      <View style={styles.DragItemInfoContainer}>
                           <Text style={{color:PrimaryText}}>感冒药</Text>
                           <View style={{flexDirection:'row'}}>
                                <View style={{width:50}}>
                                  <Text>52.90</Text>
                                  <Text>32.90</Text>
                                </View>
                                <View style={styles.DragNumberContainer}>
                                  <Text style={{color:PrimaryText}}>热卖 1000盒</Text >
                                </View>

                           </View>
                      </View>
              </View>
              <View style={styles.DragItem}>
                      <View>
                          <Image source={require('../../img/drag.jpg')} style={{width:80,height:60}}/>
                      </View>
                      <View style={styles.DragItemInfoContainer}>
                           <Text style={{color:PrimaryText}}>感冒药</Text>
                           <View style={{flexDirection:'row'}}>
                                <View style={{width:50}}>
                                  <Text>52.90</Text>
                                  <Text>32.90</Text>
                                </View>
                                <View style={styles.DragNumberContainer}>
                                  <Text style={{color:PrimaryText}}>热卖 1000盒</Text >
                                </View>

                           </View>
                      </View>
              </View>
              <View style={styles.DragMoreContainer}>
                 <Text>更多...</Text>
              </View>
            </ScrollView>
        </View>

      </View>
    );
  }
}
const styles=StyleSheet.create({
    headerContainer:{
      flexDirection:'row',
      height:height/4,
      backgroundColor:PrimaryColor,
    },
    imageContainer:{
      padding:5,
      alignItems:'center',
      justifyContent:'center',
    },
    image:{
      width:100,
      height:100,
      resizeMode:'stretch',
      borderRadius:5,
    },
    InfoContainer:{
      flex:1,
      flexDirection:'column',
      paddingLeft:10,
      paddingRight:10,
      padding:10,
      justifyContent:'center',
    },
    ScoreContainer:{
      flexDirection:'column',
      alignItems:'center',
      width:80,
      alignItems:'center',
      justifyContent:'center',
    },
    TagsContiner:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:10,
      marginBottom:10,
    },
    tag:{
      paddingLeft:10,
    },
    InfoBigContainer:{
      height:height/5,
      flexDirection:'row',
      padding:10,
      width:width,
      borderBottomWidth:0.5,
      borderColor:DividerText,
      alignItems:'center'
    },
    DragsContainer:{
      height:height/4
    },
    DragItem:{
      flexDirection:'row',
      height:100,
      padding:15,
      borderBottomWidth:0.5,
      borderColor:DividerText,
    },
    DragItemInfoContainer:{
      flex:1,
      marginLeft:30,
    },
    DragNumberContainer:{
      flex:1,
      justifyContent:'flex-end',
      alignItems:'flex-end',
    },
    DragMoreContainer:{
      alignItems:'center',
      justifyContent:'center',
      height:30,
      borderBottomWidth:1,
    }
});
export default Show;
