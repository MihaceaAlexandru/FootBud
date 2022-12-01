import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#1e2724',
    },
    scrollview:{
        flexDirection:'column',
        width:'100%',
        height:'100%',
        flexGrow: 1
    },
    closeBtnLineOne:{
        borderBottomColor:'white',
        borderTopColor:'transparent',
        borderRightColor:'transparent',
        borderLeftColor:'transparent',
        borderWidth:2,
        width:20,
        transform: [{rotate:'-35deg'}],
        top:34,
        left:8
    },
    closeBtnLineTwo:{
        borderBottomColor:'white',
        borderTopColor:'transparent',
        borderRightColor:'transparent',
        borderLeftColor:'transparent',
        borderWidth:2,
        width:20,
        transform: [{rotate:'35deg'}],
        top:40,
        left:9
    },
    closeBtn:{
        left:20
    },
    icon:{
        width:80,
        height:80,
        left:290,
        bottom:10
    },
    iconContainer:{
        width:90,
        height:90,
        borderRadius:90,
        backgroundColor:'#00ef3e',
        alignItems:'center',
        justifyContent:'center',
        left:30,
        top:30
    },
    profileIcon:{
        width:90,
        height:90,
        right:2,
        bottom:2,
    },
    secondContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    titleContainer:{
        flex:1,
        flexDirection:'column'
    },
    title:{
        fontSize:35,
        color:'white',
        left:45,
        top:30,
        fontWeight:'bold'
    },
    descriptionUser:{
        color:'#00ef3e',
        fontSize:15,
        top:30,
        left:45,
        textTransform: "uppercase",
    },
    followBtnContainer:{
        top:75,
        left:110
    },
    followBtn:{
        backgroundColor:'#00ef3e',
        width:160,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    followTxt:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        textTransform: "uppercase",
    },
    levelSubtitle:{
        top:120,
        left:30
    },
    levelSubtitleTxt:{
        color:'white',
        fontSize:15,
        textTransform: "uppercase",
        fontWeight:'bold'
    },
    levelTxt:{
        top:35,
        left:5,
        color:'#00ef3e',
        fontSize:25,
        textTransform: "uppercase",
        fontWeight:'bold'
    },
    levelBarConatiner:{
        flexDirection:'row',
        top:210,
        left:30
    },
    levelBegginer:{
        backgroundColor:'#808080',
        height:7,
        width:105,
        borderRadius:10,
        left:10
    },
    levelIntermediar:{
        backgroundColor:'#C0C0C0',
        height:7,
        width:105,
        borderRadius:10,
        left:5
    },
    levelPro:{
        backgroundColor:'white',
        height:7,
        width:105,
        borderRadius:10
    },
    levelDot:{
        backgroundColor:'#00ef3e',
        width:15,
        height:15,
        borderRadius:15,
        bottom:43
    },
    levelLine:{
        borderRightColor:'#00ef3e',
        borderTopColor:'#00ef3e',
        borderLeftColor:'transparent',
        borderBottomColor:'transparent',
        borderWidth:1,
        height:40,
        width:100,
        bottom:35,
        right:92
    },
    gamesNumberContainer:{
        top:270,
        left:50,
        flexDirection:'row',
        alignItems:'center'
    },
    gamesNumber:{
        fontSize:100,
        fontWeight:'bold',
        color:'#00ef3e'
    },
    gamesNumberTxt:{
        fontSize:30,
        color:'white',
        left:30,
        textTransform: "uppercase",
    },
    reliabilityContainer:{
        flexDirection:'column',
        top:300,
        left:30
    },
    reliabilityTitle:{
        color:'white',
        fontSize:15,
        textTransform: "uppercase",
        fontWeight:'bold'
    },
    reliabilityCharContainer:{
        top:20,
        flexDirection:'row'
    },
    reliabilityTxt:{
        textTransform: "uppercase",
        fontSize:13,
        color:'#C0C0C0',
        paddingTop:20,
    },
    gauge: {
        position: 'absolute',
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
      },
      gaugeText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 24,
        fontWeight:'bold'
      },
      reliabilityValueContainer:{
        left:30,
        top:300,
        flexDirection:'column'
      },
      reliabilityValueTxt:{
        fontSize:25,
        textTransform: "uppercase",
        color:'#00ef3e',
        fontWeight:'bold'
      }
})

export {style};