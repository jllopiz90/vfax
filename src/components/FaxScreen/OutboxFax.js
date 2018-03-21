import React, {Component} from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Left, Button, Icon, Right, Body, Content,Text, Card, CardItem } from "native-base";
import styles from "../Extra/Style";


export default class OutboxFax extends Component{
    render(){
      return(
        <Container style= {styles.container}>
        <Header style={styles.header}>
            <Left style={{flex:1,flexDirection:'row'}}>
              <Button               
              transparent
              onPress={()=>this.props.navigation.navigate("DrawerOpen")}>
                <Icon style={styles.icon} name="menu" />
              </Button>
              <Title style={styles.textHeader}>{"Fax Outbox"}</Title>  
            </Left>
            </Header>
          <View style= {styles.screenView}>
                <View style= {styles.logoContainer}>
                <Image style={styles.logo} 
                source={require('../../imgs/logo-light.png')} 
                />
                <Text>SCREEN Fax Outbox</Text>                
                </View>                
            </View> 
        </Container>
        );
    }
}