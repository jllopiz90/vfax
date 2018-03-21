import React, { Component } from "react";
// import InboxFax from "./InboxFax";
import FaxNav from "./InboxFax";
import OutboxFax from "./OutboxFax";
// import FaxMessage from './FaxMessage';
import { TabNavigator, StackNavigator} from "react-navigation";
import { Image} from "react-native";
import { Text, Icon, Footer, FooterTab, Button,Container, Header, Title,Tab, Tabs, TabHeading, Left, Body,Right} from "native-base";
import styles from "../Extra/Style";

const FaxTabs = TabNavigator({
    InboxTab:{
      screen:FaxNav,
      navigationOptions:{
        tabBarLabel:"Inbox",       
        tabBarIcon:({tintColor})=><Icon name="mail" color={tintColor}/>
      },      
    },
    OutboxTab:{
      screen:OutboxFax,
      navigationOptions:{
        tabBarLabel:"Outbox",
        tabBarIcon:({tintColor})=><Icon name="paper-plane" color={tintColor}/>,
      }
    }
  },{
      tabBarOptions:{
        // activeTintColor:'#3498db',
        // inactiveTintColor:"#FFFFFF",
        tintColor:"#777",
        showIcon:true,
        activeBackgroundColor:"#FFFFFF",
        inactiveBackgroundColor:"#3498db",
        tabSyle:{
          flexDirection:'row',
        },
      },
      tabBarPosition:"bottom",
      swipeEnabled:true,
      animationEnabled:true,      
  });

export default FaxTabs;

// export default class FaxScreen extends Component{
//   constructor(props){
//     super(props);
//   }
  
//     render(){
//       return (
//         <Container style={styles.containerWhite}>       
//         {/* <Header style={styles.header}>
//             <Left>
//               <Button               
//               transparent
//               onPress={()=>this.props.navigation.navigate("DrawerOpen")}>
//                 <Icon style={styles.icon} name="menu" />
//               </Button>
//             </Left>
//             <Body>
//               <Title style={styles.textHeader}>{"Fax"}</Title>  
//             </Body>
//             <Right/>
//             </Header>  */}
//           <Tabs tabBarPosition="bottom">
//             <Tab heading={<TabHeading style={styles.bottomTab}><Icon name="mail"/><Text style={{fontSize:22}}>Inbox</Text></TabHeading>}>
//               <InboxFax navigation={this.props.navigation}/>
//             </Tab>
//             <Tab heading={<TabHeading style={styles.bottomTab}><Icon name="paper-plane"/><Text style={{fontSize:22}}>Outbox</Text></TabHeading>}>
//               <OutboxFax />
//             </Tab>
//           </Tabs>
//       </Container>);
//     }
//   }
  
