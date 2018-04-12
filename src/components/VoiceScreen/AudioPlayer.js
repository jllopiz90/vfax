import React, {Component} from 'react';
import { View, Slider, Text } from 'react-native';
import {Icon} from 'react-native-elements';
import {Player,MediaStates} from 'react-native-audio-toolkit';
import styles from "../Extra/Style";

export default class AudioPlayer extends Component{
    constructor(props){
        super(props);
        this.state = {
          path:this.props.fileUri, 
          playPauseButton: 'Preparing...',
          stopButtonDisabled: true,
          playButtonDisabled: true,
    
          // loopButtonStatus: false,
          progress: 0,
    
          error: null
        };
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
    
      _playPause(){
        this.player.playPause((err, playing) => {
          if (err) {
            this.setState({
              error: err.message
            });
          }
          this._updateState();
        });
      }
    
      _stop(){
        this.player.stop(() => {
          this._updateState();
        });
      }
    
      _seek(percentage){
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
    
      _currentTime(){
        if(this.player && this.player.currentTime > 0)
          return this._msToTime(this.player.currentTime); 
        else 
          return '00:00'; 
      }
    
      _msToTime(s){
        
        var pad = (n,z =2) => ('00' + n).slice(-z);
        
        var ms = s % 1000;
        s = (s -ms) / 1000; 
        var secs = s % 60;
        s = (s -secs) / 60;
        var mins = (s % 60);
        return pad(mins) + ":" +  pad(secs);
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
            <View style={styles.boxShadow}>
              <View style={styles.audioControls}>
                {this.state.playPauseButton === "Play" && playButton}
                {!(this.state.playPauseButton === "Play") && pauseButton}
                {stopButton}
                <Text style={styles.displayTime}>{this._currentTime()}</Text>
                <View style={styles.slider}>
                    <Slider step={0.0001} disabled={this.state.playButtonDisabled} onValueChange={(percentage) => this._seek(percentage)} value={this.state.progress}/>                          
                </View>
              </View>
              <View style={styles.audioDate}>
                <Text>{this.props.fileDate}</Text>
              </View>
            </View>
        );
    }
}