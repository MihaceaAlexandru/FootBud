import { StyleSheet} from "react-native";


const style = StyleSheet.create({
    container:{
        backgroundColor: '#1e2724',
        flex:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    containerSecond:{
        felx:1,
        display:'flex',
        flexDirection:'column',
        marginLeft:50,
        marginTop:110,
    },
    textContainer:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    },
    selectBottonAge: {
        marginTop:10,
        width:100,
        backgroundColor:'#1e2724',
        borderColor:'#00ef3e', 
        borderWidth:2,
        borderRadius:10
    },
    selectBottonCity:{
        marginTop:10,
        width:160,
        backgroundColor:'#1e2724',
        borderColor:'#00ef3e', 
        borderWidth:2,
        borderRadius:10
    },
    selectButtonText:{
        color:'white'
    },
    constainerSelectors:{
        display:'flex',
        flexDirection:'row'
    },
    contentSelect:{
        marginRight:20
    },
    textAgeView:{
        display:'flex',
        flexDirection:'row',
        marginTop:10
    },
    selectText:{
        color:'rgba(255, 255, 255, 0.6)'
    },
    buttonViewSignOut:{
        marginTop:50
    },
    appButtonContainer:{
        width: 280,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 459,
        borderColor:'#00ef3e',
        borderWidth: 2,
        backgroundColor:'#00ef3e'
    },
    appButtonText: {
        fontSize: 15,
        textTransform: "uppercase",
    },
    input:{
        borderBottomColor:'#00ef3e',
        borderTopColor:'#1e2724',
        borderRightColor:'#1e2724',
        borderLeftColor:'#1e2724',
        borderWidth:2,
        width:280,
        height:30,
        marginBottom:30,
        color:"rgba(255, 255, 255, 0.6)"
    },
    term:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:30,
        marginRight:50
    },

    ///// Modala
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    enteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#00ef3e",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        display:'flex',
        flexDirection:'column'
      }
})


export {style}