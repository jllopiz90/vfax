import React, {Component} from 'react';
import { StyleSheet,  View,TextInput, Text, TouchableOpacity } from 'react-native';


export default class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
          userName: '',
          password: '',
          message : ''
        };
    }       
    
    handleLogin = ()=>{       
       var proceed = false;
        fetch("https://profilehub.auth0.com/oauth/token", {
            method: "POST",             
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username        : this.state.userName,
                password        : this.state.password,
                client_id       : "4SgjJ3eqQ24PF9FRKvzpyEwfPYGdP1yI",
                client_secret   : "3fw2EBFTnEzGcZPkzjmFxePKn5MSiUb3bf5nH7OSIE11fI4t8NmMbrNG9sd2M3bb",
                grant_type      : "password",
                scope           : "openid",
              }),
          })
          .then((response) => response.json())
          .then((response) => {
            if (response.error) 
              this.setState({message:"Invalid user or password!"})
            else
              proceed = true;
          })
          .done((() => {            
              if (proceed)
                 this.props.onLoginPress();
            })
          );
      
    }
    
    render(){
      return(
        <View style= {styles.container}>     
            <TextInput 
                placeholder = "Username or Email"
                placeholderTextColor="rgba(255,255,255,0.7)"               
                keyboardType="email-address"
                autoCapitalize ="none"
                autoCorrect ={false}
                style = {styles.input}
                onChangeText = {(userName)=>{
                  this.setState({userName})
                  this.setState({message:""})
                }}
                value = {this.state.userName}
            />    
            <TextInput 
                placeholder = "Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                secureTextEntry
                style = {styles.input}
                onChangeText = {(password)=>this.setState({password})}
                value = {this.state.password}
            />
            {!!this.state.message && (
              <Text
                  style={{fontSize: 14, color: 'red', padding: 5, marginLeft:20}}>
                  {this.state.message}
              </Text>
            )}
            <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLogin}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>       
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
    input:{
        height:40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom:10,
        color: 'black',
        paddingHorizontal:10,
        marginHorizontal: 20,
        fontSize: 16
    },
    buttonContainer:{
        backgroundColor: '#2980b9',
        paddingVertical:10,
        marginHorizontal: 20
    },
    buttonText:{
        textAlign: 'center',
        color:'#FFFFFF',
        fontWeight: '700',
        fontSize: 22
    }
});