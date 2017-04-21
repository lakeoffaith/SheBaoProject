import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import styles from './style.js'
import css from '../../global/css';

import Icon from 'react-native-vector-icons/MaterialIcons';
class Main extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    showIcon:true,
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: (focused,tintColor) => {
      return <View><Text>nihao</Text></View>
    },
  };


  render() {
    return (
      <View style={css.body}>
        <View style={[css.titleContainer,{backgroundColor:'gray'}]}>
            <View style={styles.leftTitle}><Icon name="place" size={16} color="#900" style={{marginRight:5}}/><Text size={14}>成都</Text></View>
            <View style={css.title}><Text style={{fontSize:18}}>IJOY</Text></View>
            <View style={styles.rightTitle}><Icon name="crop-free" size={16} color="#900" style={{marginRight:5}}/></View>
        </View>
        <View style={styles.scrollViewContainer}>
            <Text>图片轮播区域</Text>
        </View>
        <View style={styles.othersContainer}>
            <View style={{flexDirection:'row',}}>
              <View style={styles.cuboidContainer}>
                  <View onPress={()=>this.props.navigation.navigate("News")}><Text>政策动态</Text></View>
              </View>
              <View style={styles.cuboidContainer}>
                  <Text>附近促销</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',}}>
                <View style={styles.cuboidContainer}>
                  <Text>明细查询</Text>
                </View>
                <View style={styles.cuboidContainer}>
                    <Text>更多功能</Text>
                </View>
            </View>
            <View style={styles.centerCircleContainer}>
              <Text style={{fontSize:17,}}>医保卡</Text>
            </View>

        </View>
      </View>
    );
  }
}

export default Main;
