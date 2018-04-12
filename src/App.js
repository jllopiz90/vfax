import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './components/Login/Login';
import {Provider,connect} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';
import reducers from "./reducers";
import firebase from 'firebase';

export default class App extends Component {

  componentWillMount(){
    var config = {
        apiKey: "AIzaSyAs0685doWYqECoiEsyxEYhQwwk6P6RBYE",
        authDomain: "auth-3347a.firebaseapp.com",
        databaseURL: "https://auth-3347a.firebaseio.com",
        projectId: "auth-3347a",
        storageBucket: "auth-3347a.appspot.com",
        messagingSenderId: "104777415123"
    };
    firebase.initializeApp(config);
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