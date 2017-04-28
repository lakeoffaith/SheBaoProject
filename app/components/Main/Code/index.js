'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../../ijoyComponents/color'
export default class BadInstagramCloneApp extends Component {
  static navigationOptions = {
    title:'扫描二位码',
    header: (navigation, defaultHeader) => {
      console.log("----");
      console.log(defaultHeader);
      console.log(navigation);
      return(
        {
          style:{
            backgroundColor:PrimaryColor,
          }
        }
      );

      }
  }
  constructor(props) {
        super(props);
        this.state = {
            code: "None"
        };
        this._show = this._show.bind(this);
  }
  _show=(val)=> {
        this.setState({
            code:val.data
        })
    }
  render() {
    return (
      <View style={styles.container}>

        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          onBarCodeRead={ (code) => this._show(code)}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
  },
  preview: {
    width:200,
    height:200,
    alignSelf:'center',

  },
  capture: {
    position:'absolute',
    bottom:10,
    left:(200-60)/2,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',

  }
});
