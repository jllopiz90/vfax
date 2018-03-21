import React, {Component} from "react";
import { Image, View} from 'react-native';
import {DrawerNavigator, TabNavigator} from 'react-navigation';
import {Icon} from "native-base";
import Home from '../Secured/HomePage';
import Sidebar from './SideBar';

import FaxScreen from '../FaxScreen/FaxScreen';
import FaxTabs from '../FaxScreen/FaxScreen';
import MsgScreen from '../TextScreen/MsgScreen';
import VoiceNav from '../VoiceScreen/VoiceScreen';
import MyScanner from '../Scanner/Scanner';
import AppSettings from "../Secured/Settings";


export const DrawerNav = DrawerNavigator({
        Home:{screen:Home},
        MyVoice:{screen:VoiceNav},
        MyText:{screen:MsgScreen},
        MyFax:{screen:FaxTabs},
        MyScanner:{screen:MyScanner},
        Settings:{screen:AppSettings},
    },{
        contentComponent: props => <Sidebar {... props} />
        //initialRouteName: 'Home',
    }
)