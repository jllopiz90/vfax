import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './components/Login/Login';
import {Provider,connect} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';
import reducers from "./reducers";


export default class App extends Component {

  state = {
    isLoggedIn: false
  }


  onLogoutPress = ()=>{
    this.setState({isLoggedIn:false});
    alert("User Logout");
  }

  


  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return( 
      <Provider store={store}>
        <View style={styles.container}>
          <Login />
        </View>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});