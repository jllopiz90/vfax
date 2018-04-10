import React, {Component} from 'react';
import { Image, View, TouchableOpacity, Slider } from 'react-native';
import { Container, Header, Title, Left, Button, Right, Body, Content,Text, Card, CardItem } from "native-base";
import {Icon} from 'react-native-elements';
import {Player,MediaStates} from 'react-native-audio-toolkit';
import styles from "../Extra/Style";

export default class VoiceMessage extends Component{
  constructor(props){
    super(props);
    this.state = {
      path:this.props.navigation.state.params.file.uri, 
      playPauseButton: 'Preparing...',
      stopButtonDisabled: true,
      playButtonDisabled: true,

      // loopButtonStatus: false,
      progress: 0,

      error: null
    };
    console.log(this.props.navigation.state.params.file.uri);
  }

  componentWillMount() {
    this.player = null;
    this.lastSeek = 0;

    this._reloadPlayer();

    this._progressInterval = setInterval(() => {
      if (this.player && this._shouldUpdateProgressBar()) {// && !this._dragging) {
        this.setState({progress: Math.max(0, this.player.currentTime) / this.player.duration});
      }
    }, 100);
  }

  _shouldUpdateProgressBar() {
    // Debounce progress bar update by 200 ms
    return Date.now() - this.lastSeek > 200;
  }

  _updateState(err) {
    this.setState({
      playPauseButton:      this.player    && this.player.isPlaying     ? 'Pause' : 'Play',
      stopButtonDisabled:   !this.player   || !this.player.canStop,
      playButtonDisabled:   !this.player   || !this.player.canPlay,
    });
  }

  _playPause() {
    this.player.playPause((err, playing) => {
      if (err) {
        this.setState({
          error: err.message
        });
      }
      this._updateState();
    });
  }

  _stop() {
    this.player.stop(() => {
      this._updateState();
    });
  }

  _seek(percentage) {
    if (!this.player) {
      return;
    }

    this.lastSeek = Date.now();

    let position = percentage * this.player.duration;

    this.player.seek(position, () => {
      this._updateState();
    });
  }

  componentWillUnmount() {
    clearInterval(this._progressInterval);
  }

  
  _reloadPlayer(){
    if(this.player){
      this.player.destroy();
    }

    this.player = new Player(this.state.path,{
      autoDestroy:false
    });
    // .prepare((err)=>{
    //   if(err){
    //     console.log('error at _reloadPlayer:');
    //     console.log(err);
    //   }
    // });
    
    this.player.volume=2.0;

    this._updateState();

    this.player.on('ended', () => {
      this._updateState();
    });
    this.player.on('pause', () => {
      this._updateState();
    });
  }

  // _toggleLooping(value) {
  //   this.setState({
  //     loopButtonStatus: value
  //   });
  //   if (this.player) {
  //     this.player.looping = value;
  //   }
  // }


  render(){
    const playButton = <Icon name="play-arrow" color='#777' size={32} style={styles.soundController} onPress={() => this._playPause()}/>;
    const pauseButton = <Icon name="pause" color='#777' size={32} style={styles.soundController} onPress={() => this._playPause()}/>;
    const stopButton = <Icon name="stop" color='#777' size={32} style={styles.soundController} onPress={() => this._stop()} />;

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
              <Title style={styles.textHeader}>{this.props.navigation.state.params.file.from}</Title>  
            </Body>
            </Left>            
          </Header>
          <Content>
              <Card>                  
                  <CardItem>                    
                      {this.state.playPauseButton === "Play" && playButton}
                      {!(this.state.playPauseButton === "Play") && pauseButton}
                      {stopButton}                                            
                      <View style={styles.sliderContainer}>
                        <View style={styles.slider}>
                          <Slider step={0.0001} disabled={this.state.playButtonDisabled} onValueChange={(percentage) => this._seek(percentage)} value={this.state.progress}/>                          
                        </View>
                        {/* <View>  > 
                        <Text>{this.props.navigation.state.params.file.time}</Text>
                        </View> */}
                      </View>
                  </CardItem>
                  <CardItem footers>
                    <Text>{this.props.navigation.state.params.file.time}</Text>
                  </CardItem>
              </Card>
            </Content> 
          </Container>
          );
      }
}