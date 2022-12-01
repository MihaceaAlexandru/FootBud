import { StyleSheet} from "react-native";


const style = StyleSheet.create({
    firstContainer:{
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        flex:1,
        backgroundColor:'#1e2724'
    },
    headerContainerComponent:{
        display:'flex',
        flexDirection:'row',
        paddingTop:60,
    },
    title:{
        paddingRight:20
    },
    icon:{
        width:70,
        height:70,
    },
    logoContainer:{
        paddingLeft:60
    },
    bottomLine:{
        borderWidth:1,
        borderBottomColor:'rgba(255, 255, 255, 0.2)',
        borderTopColor:'#1e2724',
        borderRightColor:'#1e2724',
        borderLeftColor:'#1e2724',
        paddingTop:15
    },
    textQuestionContainer:{
        alignItems:'center',
        paddingTop:150,
        display:'flex',
        flexDirection:'column'
    },
    textQuestion:{
        fontSize:35, 
        color:"#00ef3e", 
        fontWeight: "bold"
    },
    btnContainer:{
        width:150,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 459,
        borderColor:'rgba(255, 255, 255, 0.7)',
        borderWidth: 2,
        backgroundColor:'#1e2724',
    },
    btnText:{
        color:'rgba(255, 255, 255, 0.7)',
        fontSize:20
    },
    btnContainerSecond:{
        width:230,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 459,
        borderColor:'rgba(255, 255, 255, 0.7)',
        borderWidth: 2,
        backgroundColor:'#1e2724',
    },
    textSecond:{
        color:'rgba(255, 255, 255, 0.4)',
        textTransform: "uppercase",
    }
})

export {style}