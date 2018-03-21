import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './src/components/Login/Login';
import {DrawerNav} from './src/components/Navigation/DrawerNav';
// You can import from local files





export default class App extends Component {
  
  state = {
    isLoggedIn: false
  }

  onLoginPress = ()=>{
    this.setState({isLoggedIn:true});
    alert("Login Successful");
  }

  onLogoutPress = ()=>{
    this.setState({isLoggedIn:false});
    alert("User Logout");
  }

  render() {
  //  if(this.state.isLoggedIn){
      return(
        <View style={styles.container}>
          <DrawerNav onLogoutPress={this.onLogoutPress}/>
        </View>
      );
    // }else{
    //   return (      
    //     <View style={styles.container}>
    //     <Login onLoginPress={this.onLoginPress} />
    //     </View>
    //   );
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',  
  }
});