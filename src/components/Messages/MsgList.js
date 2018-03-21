import React, {Component} from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Left, Button, Right, Body, Content,Text, Card, CardItem, Thumbnail } from "native-base";
import {Icon} from 'react-native-elements';
import { StackNavigator } from "react-navigation";
import styles from "../Extra/Style";

export default class MsgList extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:this.props.data, 
      type: this.props.type,
    };
  } 

  renderItem =(item,i) =>{
    const faxThumb = <Thumbnail rectangle source={item.fileName} key={item.Id.toString()}/>;
    const audioThumb = <Icon name="voicemail" key={item.Id.toString()}/>;
    const textThumb = <Icon name="chat" key={item.Id.toString()}/>;    

    const faxNavButton = <Button               
                        transparent
                        key={item.Id.toString()+"_btnNav"}
                        onPress={()=>this.props.navigation.navigate("Fax",{file:item})}
                        >
                        <Icon name="chevron-right" key={item.Id.toString()+"_icon"}/>
                         </Button>;
    const audioNavButton = <Button
                        key={item.Id.toString()+"_btnNav"}
                        transparent
                        onPress={()=>this.props.navigation.navigate("Voice",{file:item})}
                        >
                        <Icon name="chevron-right" key={item.Id.toString()+"_icon"}/>                        
                        </Button>;
    const textNavButton = <Button
                              transparent     
                              onPress={()=>this.props.navigation.navigate("Text",{conversation:item})}                         
                              key={item.Id.toString()+"_btnNav"}>
                              <Icon name="chevron-right" key={item.Id.toString()+"_icon"}/>
                              </Button>;

    if(this.state.type === "text"){
      return ( 
        <TouchableOpacity key={item.Id.toString()} onPress={()=>this.props.navigation.navigate("Text",{conversation:item})}>     
        <Card key={item.Id.toString()}>
          <CardItem style={{alignItems:"center"}} key={item.Id.toString()+"_header"}>
              <Body key={item.Id.toString()}>
                <Text style={{marginLeft:20}} key={item.Id.toString()}>{item.contactNumbers}</Text>
              </Body>                     
          </CardItem>
          <CardItem cardBody key={item.Id.toString()}>
          <Left key={item.Id.toString()+"_left"}>
                { textThumb }
              <Body key={item.Id.toString()+"leftBody"}>
                <Text numberOfLines={1} note key={item.Id.toString()}>{item.lastMessage.text}</Text>
              </Body>
            </Left>
            <Right key={item.Id.toString()+"_right"}>
              { textNavButton }
            </Right>
          </CardItem>
        </Card>
        </TouchableOpacity>
      )
    }else if(this.state.type === "fax"){
      return (
        <TouchableOpacity key={item.Id.toString()} onPress={()=>this.props.navigation.navigate("Fax",{file:item})}>
        <Card key={item.Id.toString()}>
          <CardItem key={item.Id.toString()}>
            <Body style={{flexDirection:'row'}} key={item.Id.toString()+"_body"}>
                {faxThumb}
                <View style={{marginLeft:20}}>
                <Text key={item.Id.toString()+"_text1"}>
                  {item.from}
                </Text>
                <Text note key={item.Id.toString()+"_text2"}>{item.time}</Text>
                </View>
                <Right>
                  {faxNavButton}
                </Right>
              </Body>
          </CardItem>
        </Card>
        </TouchableOpacity>
      )
    }else{
      return(
      <TouchableOpacity key={item.Id.toString()} onPress={()=>this.props.navigation.navigate("Voice",{file:item})}>
        <Card key={item.Id.toString()}>
          <CardItem key={item.Id.toString()}>
            <Body style={{flexDirection:'row'}} key={item.Id.toString()+"_body"}>
                {audioThumb }
                <View style={{marginLeft:20}}>
                <Text key={item.Id.toString()+"_text1"}>
                  {item.from}
                </Text>
                <Text note key={item.Id.toString()+"_text2"}>{item.time}</Text>
                </View>
                <Right>
                  {audioNavButton }
                </Right>
              </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
      )
    }
    
  }

  render(){
      return(
        <Container style= {styles.containerWhite}>
          <Header style={styles.header}>
            <Left style={{flex:1,flexDirection:'row'}}>
              <Button               
              transparent
              onPress={()=>this.props.navigation.navigate("DrawerOpen")}>
                <Icon style={styles.icon} name="menu" />
              </Button>
              <Title style={styles.textHeader}>{this.state.type === "fax" ? "Fax Inbox" :(this.state.type === "voice" ? "VoiceMail" : "Tex Messages")}</Title>                
            </Left>            
            </Header>
          <Content style= {styles.content}>
            {this.state.data.map(this.renderItem)}          
          </Content> 
         </Container>
        );
    }
}