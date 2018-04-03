import React, {Component} from 'react';
import { StyleSheet, Image, View, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../../actions'; 
import {DrawerNav} from '../Navigation/DrawerNav';

class Login extends Component{
  constructor(props) {
    super(props);
    // this.props.onLogoutPress();
  }

  renderLogin(){
    console.log("in Login Comp");
    console.log(this.props.isLoggedIn);
    if(this.props.isLoggedIn){
        return (
          <View style={styles.container}>
              <DrawerNav />
          </View>
        );
    }else{
      return(
        <KeyboardAvoidingView behavior= "padding" style={styles.avoidingView}>
            <View style= {styles.container}>
                <View style= {styles.logoContainer}>
                <Image style={styles.logo} 
                source={require('../../imgs/logo-light.png')} 
                />
                </View>
                <View style= {styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
        </KeyboardAvoidingView>
      );
    }
  }

  render(){
    return(
      this.renderLogin()
    );
  }

}

const mapStateToProps = ({auth}) =>{
  const {isLoggedIn} = auth;
  
  return { isLoggedIn};
}

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#3498db",
      alignItems: 'stretch'
    },
    avoidingView:{
      flex:1
    },
    logoContainer:{
      alignItems:'center',
      flexGrow: 1,
      justifyContent:'center'
    },   
  });