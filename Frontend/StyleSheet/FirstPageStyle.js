import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container: {
        backgroundColor: '#1e2724',
        flex: 1,
        display:'flex',
        flexDirection:'column',
        justifyContent:"flex-end",
        alignItems:'center'
    },
    containerSecond: {
        flex: 1,
        backgroundColor: '#1e2724',
        alignItems: 'center',
        justifyContent:'center',
        display:'flex',
        flexDirection:'column'
    },
    btnContainerPlayer: {
        justifyContent:'center',
        position:'relative',
        alignItems:'center',
        margin:20
    },
    appButtonContainer: {
        width: 253,
        height: 70,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 459,
        borderColor:'#00ef3e',
        borderWidth: 2
    },
    containerStart:{
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        position:'absolute'
    },
    appButtonText: {
        color: '#00ef3e',
        fontSize: 20,
        textTransform: "uppercase",
    },
    btnStart:{
        justifyContent:'center',   
        alignItems:'center',
        bottom:50
    },
    btnStartText:{
        fontSize: 20,
        color:'white'
    },
    arrow:{
        transform: [
            { rotateX: "45deg" },
            { rotateZ: "45deg" }
          ],
          height:20,
          width:20,
          borderWidth:2,
          borderLeftColor:'white',
          borderTopColor:'white',
          borderBottomColor:'#1e2724',
          borderRightColor:'#1e2724',
          bottom:60
    },
    arrowTwo:{
        transform: [
            { rotateX: "45deg" },
            { rotateZ: "45deg" }
          ],
          height:20,
          width:20,
          borderWidth:2,
          borderLeftColor:'rgba(255, 255, 255, 0.7)',
          borderTopColor:'rgba(255, 255, 255, 0.7)',
          borderBottomColor:'#1e2724',
          borderRightColor:'#1e2724',
          bottom:60
    },
    arrowThree:{
        transform: [
            { rotateX: "45deg" },
            { rotateZ: "45deg" }
          ],
          height:20,
          width:20,
          borderWidth:2,
          borderLeftColor:'rgba(255, 255, 255, 0.4)',
          borderTopColor:'rgba(255, 255, 255, 0.4)',
          borderBottomColor:'#1e2724',
          borderRightColor:'#1e2724',
          bottom:60
    },
    logoContainer:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        bottom:350
    },
    logo:{
        width:250,
        height:250
    }
});

export {style}
