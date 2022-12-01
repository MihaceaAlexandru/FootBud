import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container: {
        backgroundColor: '#1e2724',
        flex: 1,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    headerContainer:{
        flexDirection:'row',
    },
    icon:{
        width:70,
        height:70,
        marginLeft:70
    },
    iconBall:{
        width:65,
        height:65,
        marginLeft:65
    },
    meniu: {
        backgroundColor:'#00ef3e',
        flexGrow:1,
        position:'absolute',
        top:0,
        bottom:0,
        right:'25%',
        left:0,
        transform:[
            {scale: 1}
        ]
    },
    meniuButton:{
        paddingTop:20
    },
    line:{
        borderBottomColor:'#00ef3e',
        borderTopColor:'#1e2724',
        borderRightColor:'#1e2724',
        borderLeftColor:'#1e2724',
        borderWidth:2,
        height:10,
        width:40,
        marginLeft:50
    },
    closeBtn:{
        flexDirection:'row',
        paddingTop:75
    },
    closeBtnXOne:{
        borderBottomColor:'white',
        borderTopColor:'#00ef3e',
        borderRightColor:'#00ef3e',
        borderLeftColor:'#00ef3e',
        borderWidth:2,
        width:40,
        marginLeft:50,
        transform: [{rotate:'45deg'}]
    },
    closeBtnXTwo:{
        borderBottomColor:'white',
        borderTopColor:'#00ef3e',
        borderRightColor:'#00ef3e',
        borderLeftColor:'#00ef3e',
        borderWidth:2,
        width:40,
        marginLeft:-40,
        transform: [{rotate:'-45deg'}]
    },
    btn:{
        flexDirection:'row',
        paddingLeft:50,
        paddingTop:25
    },
    meniuBtns:{
        backgroundColor:'black',
        borderRadius:30,
        width:40,
        height:40,
        marginRight:10,
        alignItems:'center',
        justifyContent:'center'
    },
    btnIcon:{
        width:50,
        height:50,
    },
    txt:{
        fontSize:17,
        paddingTop:10
    }
})

export {style}