import React,{Component} from 'react';
import {Platform,Text,View, Linking} from 'react-native';
import {GiftedChat,Actions, Bubble,SystemMessage} from 'react-native-gifted-chat';
import CustomActions from './Custom/CustomActions';
import { Container, Header, Title, Left, Button, Right, Body, Content } from "native-base";
import {Icon} from 'react-native-elements';
import styles from '../Extra/Style';
// import CustomView from './Custom/CustomView';

export default class ChatView extends Component{
    constructor(props){
        super(props);
        this.state={
            // conversation:this.props.navigation.state.params.conversation,
            messages:[], //load from props
            contacts:"",
            // loadEarlier:true,
            typingText:null,
            isLoadingEarlier:false,
        };

        this._isMounted = false;
        this.onSend = this.onSend.bind(this);
        this.onReceive = this.onReceive.bind(this);
        this.renderCustomActions = this.renderCustomActions.bind(this);
        this.renderBubble = this.renderBubble.bind(this);
        this.renderSystemMessage = this.renderSystemMessage.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        // this.onLoadEarlier = this.onLoadEarlier.bind(this);

        this._isAlright =null;
    }

    componentWillMount(){
        this._isMounted=true;
        this.setState(()=>{
            return{
                messages: this.props.navigation.state.params.conversation.messagesList,
                contacts:this.props.navigation.state.params.conversation.contactNumbers,
            };
        });
    }

    componentWillUnmount(){
        this._isMounted=false;
    }

    onLoadEarlier(){
        this.setState((previousState)=>{
            return{
                isLoadingEarlier:true,
            };
        });

        setTimeout(()=>{
            if(this._isMounted === true){
                this.setState((previousState)=>{
                    return{
                        messages:GiftedChat.prepend(previousState.messages, props.oldMessages),
                        loadEarlier:false,
                        isLoadingEarlier: false,
                    };
                });
            }
        },1000); //simulating network
    }

    onSend(messages =[]){
        this.setState((previousState)=>{
            return{
                messages:GiftedChat.append(previousState.messages,messages),
            };
        });

    }

    onReceive(text){
        this.setState((previousState)=>{
            return{
                messages:GiftedChat.append(previousState.messages,{
                    _id:Math.round(Math.random()*1000000),
                    text:text,
                    createdAt: new Date(),
                    user:{
                        _id:2,
                        name:'React Native'
                    },
                }),
            };
        });
    }

    handlePhonePress(phone){
        alert(phone+' has been pressed');
    }

    handleUrlPress(url){
        Linking.openURL(url).catch(err=>console.log('An error ocurred',err));
    }

    renderCustomActions(props){
        if(Platform.OS === 'ios'){
            return (
                <CustomActions {...props} />
            );
        }
        const options={
            'Action 1':(props)=>{
                alert('option 1');
            },
            'Action 2':(props)=>{
                alert('option 2');
            },
            'Cancel':()=>{},
        };
        return (<Actions {...props} options={options} />);
    }

    renderBubble(props){
        return(
            <Bubble {...props} wrapperStyle={{
                left: {
                    backgroundColor:'#f0f0f0',
                }
            }} />
        );
    }

    renderSystemMessage(props){
        return(
            <SystemMessage 
            {...props} 
            containerStyle={{
                marginBottom:15,
            }}
            textStyle={{
                fontSize:14,
            }}
            />
        );
    }

    // renderCustomView(props){
    //     return(
    //         <CustomView {...props}/>
    //     );
    // }

    renderFooter(props){
        if(this.state.typingText){
            return(
                <View style={styles.footerContainer}>
                    <Text>
                        {this.state.typingText}
                    </Text>
                </View>
            );
        }
        return null;
    }

    render(){
        return(
        <Container style= {styles.containerWhite}>
          <Header noShadow style={styles.header}>
            <Left style={{flex:1,flexDirection:'row'}}>
              <Button               
              transparent
              onPress={()=>this.props.navigation.goBack()}>
                <Icon name="chevron-left"  style={{fontSize:32, color:"#777"}}/>
              </Button>
              <Body style={{marginLeft:40}}>
                <Title style={styles.numberHeader}>{this.state.contacts}</Title>  
              </Body>
            </Left>            
          </Header>
          <View style={{flex:1}}>
          <GiftedChat 
                messages={this.state.messages}
                onSend={this.onSend}
                loadEarlier={this.state.loadEarlier}
                onLoadEarlier={this.onLoadEarlier}
                isLoadingEarlier={this.isLoadingEarlier}

                user={{
                    _id:1,
                }}

                renderActions={this.renderCustomActions}
                renderBubble={this.renderBubble}
                renderSystemMessage={this.renderSystemMessage}
                // renderCustomView={this.renderCustomView}
                renderFooter={this.renderFooter}
                parsePatterns={(linkStyle)=>[
                    {type:'phone', style:linkStyle, onPress:this.handlePhonePress},
                    {type:'url', style:linkStyle, onPress:this.handleUrlPress}
                ]}
            />
            </View>
          </Container>            
        );
    }
}
