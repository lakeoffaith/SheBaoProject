import React,{Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store';
const store=configureStore();
function setup() {
  class Root extends Component{
    render(){
      return(
        <Provider store={store}>
          <View>
            <Text>
              nihao2
            </Text>
          </View>
        </Provider>
      );
    }
  }
  return Root;
}

module.exports=setup;
