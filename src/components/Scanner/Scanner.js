import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native';
import { Container, Header, Title, Left, Button, Right, Body, Content} from 'native-base';
import { Icon } from 'react-native-elements';
import DocumentScanner from 'react-native-document-scanner';
import styles from "../Extra/Style";


export default class MyScanner extends Component {

    constructor(props) {

        super(props);

        this.state = {

            image: null,

            flashEnabled: false,

            useFrontCam: false,

        };

    }



    renderDetectionType() {

        switch (this.state.lastDetectionType) {

            case 0:

                return "Correct rectangle found"

            case 1:

                return "Bad angle found";

            case 2:

                return "Rectangle too far";

            default:

                return "No rectangle detected yet";

        }

    }



    render() {

        return (
            <Container >
                <Header>
                    <Left style={{ flex: 1, flexDirection: 'row' }}>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" color="#777" />
                        </Button>
                        <Body style={{ marginLeft: 20 }}>
                            <Title style={styles.scannerHeader}>Scanner</Title>
                        </Body>
                    </Left>
                </Header>
                
                    <View style={styles.scannerContainer}>

                        {this.state.image ?

                            <Image style={{ flex: 1,width:styles.deviceWidth, }} source={{ uri: `data:image/jpeg;base64,${this.state.image}` }}  /> :

                            <DocumentScanner

                                useBase64

                                onPictureTaken={data => this.setState({ image: data.croppedImage })}

                                overlayColor="rgba(255,130,0, 0.7)"

                                enableTorch={this.state.flashEnabled}

                                useFrontCam={this.state.useFrontCam}

                                brightness={0.2}

                                saturation={0}

                                quality={0.5}

                                contrast={1.2}

                                onRectangleDetect={({ stableCounter, lastDetectionType }) => this.setState({ stableCounter, lastDetectionType })}

                                detectionCountBeforeCapture={10}

                                detectionRefreshRateInMS={50}

                                ref={(ref) => this.scanner = ref}

                                style={styles.scanner}

                            />

                        }

                        {this.state.image === null ?
                            <View>

                            <Text style={styles.instructions}>

                            ({this.state.stableCounter || 0} correctly formated rectangle detected
                            
                        </Text>

                        <Text style={styles.instructions}>

                            {this.renderDetectionType()}

                        </Text>
   
                            <TouchableOpacity style={styles.newPic} onPress={() => this.scanner.capture()}>

                                <Icon name="camera-alt" />

                            </TouchableOpacity></View> :
                            
                            <View style={{flexDirection:'row',alignSelf:'stretch'}}>
                                <TouchableOpacity style={styles.afterPic} onPress={() => this.setState({ image: null })}>
                                    <Text><Icon name="ios-trash" type ="ionicon" size={36}/></Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.afterPicR} onPress={() => alert("send picture")}>
                                   <Text><Icon name="send" size={36}/></Text>
                                </TouchableOpacity>
                            </View>

                        }
                        {!this.state.image &&
                            <TouchableOpacity style={[styles.button,styles.left]} onPress={() => this.setState({ flashEnabled: !this.state.flashEnabled })}>
                                        {this.state.flashEnabled && <Icon type="ionicon" name="ios-flash-outline" color="#FFF" size={32}/>}
                                        {!this.state.flashEnabled && <Icon type="ionicon"  name="ios-flash" color="#FFF" size={32}/>}
                            </TouchableOpacity> 
                        }
                    </View>
            </Container>


        );

    }

}
