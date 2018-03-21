import React, {Component} from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Left, Button, Icon, Right, Body, Content,Text, Card, CardItem } from "native-base";
import { StackNavigator } from "react-navigation";
import VoiceMessage from "./VoiceMessage";
// import VoiceMsg from "./VoiceMsg";
import MsgList from "../Messages/MsgList";
import styles from "../Extra/Style";

const msgsAudio=[
  {Id:1, from:"305-715-0000", time:"March 3, 2018 Sat 12:12 AM",path:"https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3"},
  {Id:2, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",path:"https://archive.org/download/TestTestTest_374/test.mp3"},
  {Id:3, from:"954-321-5555", time:"January 22, 2018 Mon 8:14 AM",path:"https://archive.org/download/3333ThisIsATest12-231-44/3333ThisIsATest12-231-44.mp3"},
];

const VoiceNav = StackNavigator({
  VoiceList: {
    screen: props => <MsgList {...props} data={msgsAudio} type={"voice"}/>,
    navigationOptions:({navigation})=>({
     
    })
  },
  Voice: {
    // screen:VoiceMsg,
    screen:VoiceMessage,
    navigationOptions:(props)=>({
      title:"Voice Detail",
    })
  }
  },{
      initialRouteName:'VoiceList',
      headerMode:'none'
    }
);

export default VoiceNav;