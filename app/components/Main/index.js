import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  Toast,
} from 'react-native';
import styles from './style.js'
import css from '../../global/css';
import  FocusImage from '../utils/banner';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IJoyAmapLocation from '../ijoyComponents/IJoyAmapLocation';
import DataRepository from '../../data/DataRepository';
const respository=new DataRepository();

class Main extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            city: "成都"
        };
  }
  static navigationOptions = {
    header:null,
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name='home' size={26}/>
    ),
  };

  _initLocation=()=>{
    this.listener = IJoyAmapLocation.addEventListener((data) => {
      console.log("-----------");
      console.log(data);
      this.setState({city:data.city})
    });
    IJoyAmapLocation.startLocation();
  }
  _destoryLocation=()=>{
    IJoyAmapLocation.stopLocation();
    this.listener.remove();
  }
  componentDidMount(){
    this._initLocation();
  }
  componentWillUnmount(){
    this._destoryLocation();
  }
  render() {
    return (
      <View style={css.lessBody}>
        <View style={[css.titleContainer]}>
            <View style={styles.leftTitle}><Icon name="place" size={16} color="#900" style={{marginRight:5}}/><Text size={14}>{this.state.city}</Text></View>
            <View style={css.title}><Text style={{fontSize:18}}>IJOY</Text></View>
            <View style={styles.rightTitle}><Icon name="crop-free" onPress={()=>this.props.navigation.navigate("Camera")} size={16} color="#900" style={{marginRight:5}}/></View>
        </View>
        <View style={styles.scrollViewContainer}>
            <FocusImage />
        </View>
        <View style={styles.othersContainer}>
            <View style={{flexDirection:'row',flex:1}}>

              <View style={styles.cuboidContainer}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("News")}>
                  <View  style={{flexDirection:'row'}}>
                  <Icon name="assessment" size={16}/>
                  <Text>政策动态</Text>
                  </View>
                  </TouchableOpacity>
              </View>

              <View style={styles.cuboidContainer}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate("HotShopList")}>
                  <View  style={{flexDirection:'row'}}>
                  <Icon name="shopping-basket" size={16}/>
                  <Text>附近促销</Text>
                  </View>
                  </TouchableOpacity>
              </View>

            </View>
            <View style={{flexDirection:'row',flex:1}}>
                <View style={styles.cuboidContainer}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate("Search")}>
                    <View  style={{flexDirection:'row'}}>
                    <Icon name="search" size={16}/>
                      <Text>明细查询</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.cuboidContainer}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate("Others")}>
                    <View  style={{flexDirection:'row'}}>
                    <Icon name="sort" size={16}/>
                    <Text>更多功能</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.centerCircleContainer}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("CardDetail")}>
              <Text style={{fontSize:17,}}>医保卡</Text>
              </TouchableOpacity>
            </View>

        </View>
      </View>
    );
  }
}

export default Main;
