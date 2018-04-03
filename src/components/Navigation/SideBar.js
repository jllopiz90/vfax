    import React, {Component} from "react";
    import {AppRegistry ,Image, StatusBar, ImageBackground, View} from "react-native";
    import {Container,Content,Text,List,ListItem, Left, Right, Button} from "native-base";
    import {connect} from 'react-redux';
    import {logoutUser} from '../../actions'; 
    import {Icon} from 'react-native-elements';
    import styles from "../Extra/Style";

    const routes =[
        {
            name: "Home",
            route: "Home",
            icon: "home"
        },        
        {
            name: "VoiceMail",
            route: "MyVoice",
            icon: "voicemail"
        },
        {
            name: "Text Messages",
            route: "MyText",
            icon: "chat"
        },
        {
            name: "Faxes",
            route: "MyFax",
            icon: "inbox"
        },
        {
            name: "Scanner",
            route: "MyScanner",
            icon: "scanner"
        },
        {
            name: "Settings",
            route: "Settings",
            icon: "settings"
        }
    ];

    class Sidebar extends React.Component{
        constructor(props) {
            super(props);
        } 
       
        onButtonPress(){
           this.props.logoutUser();
        }

        render(){
            return (
                <Container style={styles.sideMenuContainer}>                    
                    <View style={styles.drawerCover}>
                        <Image style={styles.img}
                            source={require('../../imgs/logo-light.png')} 
                            >                        
                        </Image>
                    </View>
                    <List style={styles.list}
                        dataArray={routes}
                        renderRow={data => {
                        return (
                            <ListItem
                            button
                            noBorder
                            onPress={() => this.props.navigation.navigate(data.route)}>
                            <Left>
                                <Icon active 
                                name={data.icon}
                                style={styles.icon} />
                                <Text style={styles.text}>{data.name}</Text>
                            </Left>                            
                            </ListItem>
                        );
                         }}                         
                      />
                      <List style={styles.list}>
                      <ListItem
                            button
                            onPress={this.onButtonPress.bind(this)}>
                            <Text style={styles.text}>Logout</Text>
                            </ListItem>
                      </List>
                </Container>
            );
        }
    }

    const mapStateToProps = ({auth}) =>{
        const {isLoggedIn} = auth;
    
        return{ isLoggedIn};
    }

    export default connect(mapStateToProps,{logoutUser}) (Sidebar);

