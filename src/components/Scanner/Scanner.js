
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
            <Container style={styles.containerWhite}>
                <Header noShadow>
                    <Left style={{ flex: 1, flexDirection: 'row' }}>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" color="#777" />
                        </Button>
                        <Body style={{ marginLeft: 20 }}>
                            <Title style={styles.textHeader}>Scanner</Title>
                        </Body>
                    </Left>
                </Header>
                
                    <View style={styles.container}>

                        {this.state.image ?

                            <Image style={{ flex: 1, width: 300, height: 200 }} source={{ uri: `data:image/jpeg;base64,${this.state.image}` }} resizeMode="contain" /> :

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

                        <Text style={styles.instructions}>

                            ({this.state.stableCounter || 0} correctly formated rectangle detected
                            
                        </Text>

                        <Text style={styles.instructions}>

                            {this.renderDetectionType()}

                        </Text>

                        {this.state.image === null ?

                            <TouchableOpacity style={styles.newPic} onPress={() => this.scanner.capture()}>

                                <Icon name="camera-alt" />

                            </TouchableOpacity> :

                            <TouchableOpacity style={styles.newPic} onPress={() => this.setState({ image: null })}>

                                <Text><Icon name="camera-alt" /> <Icon name="repeat" /></Text>

                            </TouchableOpacity>

                        }

                        <TouchableOpacity style={[styles.button,styles.left]} onPress={() => this.setState({ flashEnabled: !this.state.flashEnabled })}>
                                    {this.state.flashEnabled && <Icon name="flash-off" color="#FFF" />}
                                    {!this.state.flashEnabled && <Icon name="flash-on" color="#FFF" />}
                        </TouchableOpacity>                                                
                    </View>
                
            </Container>


        );

    }

}



const styles = StyleSheet.create({

    container: {

        flex: 1,

        justifyContent: 'center',

        alignItems: 'center',

        backgroundColor: '#F5FCFF',

    },

    snewPic: {
        height: 40,

        alignItems: 'center',

        justifyContent: 'center'

    },

    button: {

        position: 'absolute',

        alignItems: 'center',

        justifyContent: 'center',

        borderRadius: 10,

        top: 20,

        bottom: 20,

        height: 40,

        width: 120,

        //backgroundColor: '#FFF',

    },

    left: {

        left: 140,

    },

    right: {

        right: 20,

    },

    welcome: {

        fontSize: 20,

        textAlign: 'center',

        margin: 10,

    },

    instructions: {

        textAlign: 'center',

        color: '#333333',

        marginBottom: 5,

    },

    scanner: {

        flex: 1,

        width: 400,

        height: 200,

        borderColor: 'orange',

        borderWidth: 1

    }

});
