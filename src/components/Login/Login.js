import React, {Component} from 'react';
import { StyleSheet, Image, View, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{
  constructor(props) {
    super(props);
    // this.props.onLogoutPress();
  }

  render(){
      return(
        <KeyboardAvoidingView behavior= "padding" style={styles.avoidingView}>
            <View style= {styles.container}>
                <View style= {styles.logoContainer}>
                <Image style={styles.logo} 
                source={require('../../imgs/logo-light.png')} 
                />
                </View>
                <View style= {styles.formContainer}>
                    <LoginForm onLoginPress ={this.props.onLoginPress}/>
                </View>
            </View>
        </KeyboardAvoidingView>    
        );
    }
}

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