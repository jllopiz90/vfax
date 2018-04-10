import React, {Component} from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Left, Button, Icon, Right, Body, Content,Text, Card, CardItem, Thumbnail } from "native-base";
import {StackNavigator} from "react-navigation";
import MsgList from "../Messages/MsgList";
import FaxMessage from './FaxMessage';
import styles from "../Extra/Style";

// const msgs=[
//   {Id:1, from:"305-715-0000", time:"March 3, 2018 Sat 12:12 AM",fileName:require("../../files/faxImg.png")},
//   {Id:2, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
//   {Id:3, from:"954-321-5555", time:"January 22, 2018 Mon 8:14 AM",fileName:require("../../files/faxImg.png")},
//   {Id:4, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
//   {Id:5, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
//   {Id:6, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
//   {Id:7, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
//   {Id:8, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
//   {Id:9, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
//   {Id:10, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
//   {Id:11, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
//   {Id:12, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
//   {Id:13, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
//   {Id:14, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
//   {Id:15, from:"646-222-4444", time:"December 15, 2017 Fri 3:13 PM",fileName:require("../../files/faxImg.png")},
// ];


const FaxNav = StackNavigator({
  FaxList: {
    screen: props => <MsgList {...props}  type={"fax"}/>,
    navigationOptions:({navigation})=>({
     
    })
  },
  Fax: {
    screen:FaxMessage,
    navigationOptions:(props)=>({
      title:"Fax Detail",
    })
  }
  },{
      initialRouteName:'FaxList',
      headerMode:'none'
    }
);

export default FaxNav;