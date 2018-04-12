const React = require("react-native");
const {Platform, Dimensions} = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export  default{
    deviceHeight:deviceHeight,
    deviceWidth:deviceWidth,
    sideMenuContainer:{
        backgroundColor: "#FFFFFF",//#3498db
        justifyContent:"center",
        flex:1,
        alignItems:"stretch" 
    },    
    container: {
        flex: 1,      
        alignItems: 'stretch',
        backgroundColor: "#3498db"
    },
    containerWhite: {
        flex: 1,      
        alignItems: 'stretch',
        backgroundColor: "#FFFFFF"
    },
    boxShadow:{
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#ddd', 
        borderTopWidth: 0.5,
        borderBottomWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    header:{
        backgroundColor: "#FFFFFF",
    },
    headerM:{
        backgroundColor: "#FFFFFF",
        marginBottom:20,
    },
    img:{            
        backgroundColor:"#3498db",
        marginTop: 30,
        alignSelf: "stretch",
    },
    list:{
       alignSelf: "stretch",
    },    
    textHeader:{
        fontWeight: Platform.OS === "ios" ? "600" : "500",
        fontSize:24,
        position:'relative',
        right:-80,
        //marginLeft:40,
        color:"#777"
    },
    homeHeader:{
        fontWeight: Platform.OS === "ios" ? "600" : "500",
        fontSize:24,        
        color:"#777"
    },
    scannerHeader:{
        fontWeight: Platform.OS === "ios" ? "600" : "500",
        fontSize:24,
        position:'relative',
        left:-20,
        color:"#777"
    },
    numberHeader:{
        fontWeight: Platform.OS === "ios" ? "400" : "300",
        fontSize:16,
        marginLeft:15,
        color:"#777"//"#FFFFFF"
    }, 
    text:{
        fontWeight: Platform.OS === "ios" ? "500" : "400",
        fontSize:22,
        marginLeft:20,
        color:"#777"//"#FFFFFF"
    }, 
    icon:{
        color:'#777',
        fontSize:24,
        width:25
    },
    activeIcon:{
        color:'#3498db',
        fontSize:26,
        width:30
    },
      screenView:{
        flex: 1,
        backgroundColor: "#3498db",
        alignItems: 'center'
      },
      screenViewWhite:{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center'
      },    
      logoContainer:{
        alignItems:'center',
        flexGrow: 1,
        justifyContent:'center'
      },  
      buttonContainer:{
          paddingVertical:10,
          marginTop:20,
          alignItems:'center',
      },
      buttonText:{
          textAlign: 'center',
          color:'#FFFFFF',
          fontWeight: '700',
          fontSize: 22
      },
      footerTab:{
        backgroundColor: "#3498db",
      },
      drawerCover:{
        backgroundColor: "#3498db",
        alignSelf:"stretch",
        height: deviceHeight / 6,
        width:null,
        marginBottom:60,
          paddingBottom:30,
        alignItems:'center'
      },
       emailHomeP:{
            color: '#fff',
            backgroundColor:'#3498db',
            alignSelf:"stretch",
            textAlign:'center',
            marginTop:20
        },
      bottomTab:{
          backgroundColor:"#3498db",
      },
      imgView:{
          flex:1,
          alignItems:"stretch"
      },
      footerContainer:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
    },
    footerText:{
        fontSize:14,
        color:'#aaa',
    },
    slider: {
        height: 10,
        flex:1,
        marginLeft:10,
        marginRight:10,
        // alignSelf:"stretch",
    },
    displayTime:{
        marginTop:5,
        marginLeft:5
    },
    audioControls:{
        flex:1,
        flexDirection:'row', 
        justifyContent:"flex-start",
        marginTop:20
    },
    audioDate:{
        flex:1,
        alignItems:'flex-start', 
        marginTop:10, 
        marginLeft:30
    },
    soundController:{
        marginLeft:20,
        marginRight:20,
        fontSize:32,
    },
    sliderContainer:{        
        marginLeft:50,
        alignSelf:"stretch",
        backgroundColor:"blue"
    },
    scannerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',

    },
    snewPic: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',        

    },
    afterPicCont:{
        height: 40,
        flex:1,
        flexDirection:'row',
    },
    afterPic: {
        marginLeft:40
    },
    afterPicR: {
        marginLeft:260
    },
    button: {

        position: 'absolute',

        alignItems: 'center',

        justifyContent: 'flex-start',

        // borderRadius: 10,

        top: 20,

        bottom: 20,

        height: 40,

        // width: 120,

        //backgroundColor: '#FFF',

    },

    left: {        
        left: 60,

    },

    right: {        
        right: 80,

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
};