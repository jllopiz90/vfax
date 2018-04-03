import React, {Component} from 'react';
import { StyleSheet,  TextInput, TouchableOpacity,Text } from 'react-native';
import { Container, Header, Content,Button, View, Spinner } from 'native-base';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../../actions'; 


class LoginForm extends Component{
    constructor(props) {
        super(props);
    }       
    
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    
    onButtonPress(){
        const {email, password} = this.props;
        
       this.props.loginUser({email,password});
    }

    renderError(){
        if(this.props.error){
            return(
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
            ); 
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large" color="blue"/>;
        }
        return(
            <TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress.bind(this)}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
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
                onChangeText={this.onEmailChange.bind(this)} 
                value={this.props.email}
            />    
            <TextInput 
                placeholder = "Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                secureTextEntry
                style = {styles.input}
                onChangeText={this.onPasswordChange.bind(this)} 
                value={this.props.password}
            />
            {this.renderError()}
            {this.renderButton()}
        </View>
        );
    }
}

const mapStateToProps = ({auth}) =>{
    const {email, password, error, loading} = auth;

    return{ email,password, error, loading};
}

export default connect(mapStateToProps,{
    emailChanged, passwordChanged, loginUser
}) (LoginForm);

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
    },
    errorTextStyle:{
        fontSize:14,
        color:'red',
        padding:5,
        marginLeft:20
    }
});