import App from './containers/App';
import React from 'React';
import {Provider} from 'react-redux';
import configureStore from './store';

function setup(){
  class Root extends React.Component{
    render(){
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }

  }
  return Root;
}

module.exprts=setup;
