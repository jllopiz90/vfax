import React, {Component} from 'react';
import { Image, View, TouchableOpacity, Slider } from 'react-native';
import { Container, Header, Title, Left, Button, Right, Body, Content,Text, Card, CardItem } from "native-base";
import {Icon} from 'react-native-elements';
import AudioPlayer from './AudioPlayer';
import {Player,MediaStates} from 'react-native-audio-toolkit';
import styles from "../Extra/Style";

export default class VoiceMessage extends Component{
  constructor(props){
    super(props);
    this.state = {
      path:this.props.navigation.state.params.file.uri,
      date: this.props.navigation.state.params.file.time
    };
  }

  render(){
    const playButton = <Icon name="play-arrow" color='#777' size={32} style={styles.soundController} onPress={() => this._playPause()}/>;
    const pauseButton = <Icon name="pause" color='#777' size={32} style={styles.soundController} onPress={() => this._playPause()}/>;
    const stopButton = <Icon name="stop" color='#777' size={32} style={styles.soundController} onPress={() => this._stop()} />;
    console.log("stat path");
    console.log(this.state.path);
        return(
          <Container style= {styles.containerWhite}>
          <Header noShadow style={styles.header}>
            <Left style={{flex:1,flexDirection:'row'}}>
              <Button               
              transparent
              onPress={()=>this.props.navigation.goBack()}>
                <Icon name="chevron-left"  color="#777"/>
              </Button>
              <Body style={{marginLeft:20}}>
              <Title style={styles.homeHeader}>{this.props.navigation.state.params.file.from}</Title>  
            </Body>
            </Left>            
          </Header>
          <Content >
            <AudioPlayer fileUri={this.state.path} fileDate={this.state.date}/>
            </Content> 
          </Container>
          );
      }
}