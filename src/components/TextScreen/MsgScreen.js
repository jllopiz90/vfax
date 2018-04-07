import React, {Component} from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Left, Button, Icon, Right, Body, Content,Text, Card, CardItem } from "native-base";
import { StackNavigator } from "react-navigation";
import ChatView from "./TextMessage";
import MsgList from "../Messages/MsgList";
import styles from "../Extra/Style";

const messages = [
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Yes, and I use Gifted Chat!',
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Developer',
      },
      userIsSender:true,
      sent: true,
      received: true,
      location: {
        latitude: 48.864601,
        longitude: 2.398704
      },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Are you building a chat app?',
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      userIsSender:false,
      user: {
        _id: 2,
        name: 'React Native',
        phoneNumber:"786-322-1112",
      },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: "You are officially rocking GiftedChat.",
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      userIsSender:false,
      user:{
        _id: 3,
        name:"System",
        phoneNumber:"786-422-3322",
      },
    },
  ];

  const messages1 = [
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Yes, and I use Gifted Chat again and again!',
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Developer',
      },
      sent: true,
      userIsSender:true,
      received: true,
      // location: {
      //   latitude: 48.864601,
      //   longitude: 2.398704
      // },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Are you building a chat app again?',
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      userIsSender:true,
      user: {
        _id: 2,
        name: 'React Native',
        phoneNumber:"786-322-1119",
      },
    },
  ];

  const contacts=[
      {
          Id:1,
          unseenCount:2,
          messagesList:messages,
          contactNumbers:"786-322-1112,786-422-3322",
          lastMessage:messages[0],
      },
      {
          Id:2,
          unseenCount:1,
          messagesList: messages1,
          contactNumbers:"786-322-1119",
          lastMessage:messages1[0],
      },
    ];

  const TextNav = StackNavigator({
    TextList: {
      screen: props => <MsgList {...props}  type={"text"}/>,
      navigationOptions:({navigation})=>({
       
      })
    },
    Text: {
      screen:ChatView,
      navigationOptions:(props)=>({
        title:"Text Detail",
      })
    }
    },{
        initialRouteName:'TextList',
        headerMode:'none'
      }
  );

export default TextNav;
