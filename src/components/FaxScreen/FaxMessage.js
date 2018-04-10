import React, {Component} from 'react';
import { Image, View, TouchableOpacity} from 'react-native';
import { Container, Header, Title, Left, Button, Right, Body, Content,Text, Card, CardItem } from "native-base";
import {Icon} from 'react-native-elements';
import styles from "../Extra/Style";

export default class FaxMessage extends Component{
  constructor(props){
    super(props);
    console.log( this.props.navigation.state.params.file.fileName);
  } 

  render(){
        return(
          <Container style= {styles.containerWhite}>
          <Header noShadow style={styles.header}>          
            <Left style={{flex:1,flexDirection:'row'}}>
              <Button
              onPress={()=>this.props.navigation.goBack()}               
              transparent>
                <Icon name="chevron-left"  style={{fontSize:32, color:"#777"}}/>
              </Button>
              <Body>
                <Title style={{fontWeight: "600",fontSize:24,color:"#777"}}>Fax Details</Title>  
              </Body>
            </Left>            
          </Header>
          <Content style={{flex:1}}>
              <Card>
                  <CardItem bordered>
                    <Left> 
                    <Body style={{marginLeft:40}}>                      
                      <Text>{"From: "+this.props.navigation.state.params.file.from}</Text>
                      <Text note>{"Time: "+ this.props.navigation.state.params.file.time}</Text>                      
                    </Body>                   
                    </Left>
                  </CardItem>
                  <CardItem cardBody style={{backgroundColor:'#777',flex:1}}>
                    <Image source={{uri: this.props.navigation.state.params.file.fileName}} 
                      resizeMode="contain" style={{flex:1,alignSelf:'stretch' ,height:500,width:undefined}}/>
                  </CardItem>
              </Card>
          </Content>
          </Container>
          );
      }
}