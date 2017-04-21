import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import css from '../../global/css';
class Login extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerVisible:true,
  }

  render() {
    return (
      <View style={css.body}>
        <View style={[css.titleContainer,{backgroundColor:'gray'}]}>
            <Button style={css.title} onPress={()=>this.props.navigation.navigate("Root")} title="LOGIN"></Button>
        </View>

      </View>
    );
  }
}

export default Login;
