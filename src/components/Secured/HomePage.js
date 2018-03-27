import React, {Component} from 'react';
import {Image, View, TouchableOpacity } from 'react-native';
import { Container, Icon, Header, Title, Left,  Button,Right, Body, Content,Text, Card, CardItem } from "native-base";
import styles from "../Extra/Style";

export default class Home extends Component{   
   render(){
      return(
        <Container style= {styles.container}>
          <Header style={styles.header}>
            <Left>
              <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon style={styles.icon}  name="menu" />
              </Button>
            </Left>
            <Body>
              <Title style={styles.homeHeader}>Home</Title>
            </Body>
            <Right/>
          </Header>
           <View style= {styles.screenView}>                 
                <View style= {styles.logoContainer}>
                 <Image style={styles.logo} 
                 source={require('../../imgs/logo-light.png')} 
                 />
                 <Text>Welcome to the FastPBX virtual fax! </Text>                 
                 </View>                                 
             </View>              
        </Container> 
      );
    }
}