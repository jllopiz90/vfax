import React, {Component} from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Left, Button, Right, Body, Content,Text, Card, CardItem, Thumbnail } from "native-base";
import {Icon} from 'react-native-elements';
import { StackNavigator } from "react-navigation";
import {connect} from 'react-redux';
import styles from "../Extra/Style";

class MsgList extends Component{
  constructor(props){
    super(props);
    if(this.props.type == 'voice'){
      this.state = {
        data:this.props.voiceMessages, 
        type: this.props.type,
      };
    }else if(this.props.type == 'text'){
      this.state = {
        data:this.props.conversations, 
        type: this.props.type,
      };
    }else{
      this.state = {
        data:this.props.faxes, 
        type: this.props.type,
      };
    }
    
  } 

  renderItem =(item,i) =>{
    const faxThumb = <Thumbnail rectangle source={{uri: item.fileName}} key={item.id}/>;
    const audioThumb = <Icon name="voicemail" key={item.id}/>;
    const textThumb = <Icon name="chat" key={item.id}/>;    

    const faxNavButton = <Button               
                        transparent
                        key={item.id+"_btnNav"}
                        onPress={()=>this.props.navigation.navigate("Fax",{file:item})}
                        >
                        <Icon name="chevron-right" key={item.id+"_icon"}/>
                         </Button>;
    const audioNavButton = <Button
                        key={item.id+"_btnNav"}
                        transparent
                        onPress={()=>this.props.navigation.navigate("Voice",{file:item})}
                        >
                        <Icon name="chevron-right" key={item.id+"_icon"}/>                        
                        </Button>;
    const textNavButton = <Button
                              transparent     
                              onPress={()=>this.props.navigation.navigate("Text",{conversation:item})}                         
                              key={item.id+"_btnNav"}>
                              <Icon name="chevron-right" key={item.id+"_icon"}/>
                              </Button>;

    if(this.state.type === "text"){
      console.log("text item id:" +item.id);
      return ( 
        <TouchableOpacity key={item.id} onPress={()=>this.props.navigation.navigate("Text",{conversation:item})}>     
        <Card key={item.id}>
          <CardItem style={{alignItems:"center"}} key={item.id+"_header"}>
              <Body key={item.id}>
                <Text style={{marginLeft:20}} key={item.id}>{item.contactNumbers}</Text>
              </Body>                     
          </CardItem>
          <CardItem cardBody key={item.id}>
          <Left key={item.id+"_left"}>
                { textThumb }
              <Body key={item.id+"leftBody"}>
                <Text numberOfLines={1} note key={item.id}>{item.lastMessage.text}</Text>
              </Body>
            </Left>
            <Right key={item.id+"_right"}>
              { textNavButton }
            </Right>
          </CardItem>
        </Card>
        </TouchableOpacity>
      )
    }else if(this.state.type === "fax"){
      return (
        <TouchableOpacity key={item.id} onPress={()=>this.props.navigation.navigate("Fax",{file:item})}>
        <Card key={item.id}>
          <CardItem key={item.id}>
            <Body style={{flexDirection:'row'}} key={item.id+"_body"}>
                {faxThumb}
                <View style={{marginLeft:20}}>
                <Text key={item.id+"_text1"}>
                  {item.from}
                </Text>
                <Text note key={item.id+"_text2"}>{item.time}</Text>
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
      <TouchableOpacity key={item.id} onPress={()=>this.props.navigation.navigate("Voice",{file:item})}>
        <Card key={item.id}>
          <CardItem key={item.id}>
            <Body style={{flexDirection:'row'}} key={item.id+"_body"}>
                {audioThumb }
                <View style={{marginLeft:20}}>
                <Text key={item.id+"_text1"}>
                  {item.from}
                </Text>
                <Text note key={item.id+"_text2"}>{item.time}</Text>
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

const mapStateToProps = ({phones}) => {
  const voiceMessages = phones[0].voiceMessages;
  const conversations = phones[0].conversations;
  const faxes = phones[0].faxes;

  return {voiceMessages, conversations, faxes};
}

export default connect(mapStateToProps)(MsgList);