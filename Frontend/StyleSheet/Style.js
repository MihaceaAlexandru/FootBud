import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container: {
        backgroundColor: '#1e2724',
        display:'flex',
        flexDirection:'column',
        flex: 1,
        justifyContent:"flex-end"
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
        width: 209,
        position:'relative',
        justifyContent:'center',
        alignItems:'center'
    },
    appButtonContainer: {
        width: 253,
        height: 70,
        paddingVertical: 10,
        paddingHorizontal: 12,
        position: 'absolute',
        borderRadius: 459,
        borderColor:'#00ef3e',
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center'
    },
    appButtonText: {
        position: 'relative',
        color: '#00ef3e',
        fontSize: 20,
        alignContent: 'center',
        textTransform: "uppercase",
        fontWeight:'bold',
        // fontFamily:'Montserrat-Italic'
    },
    btnContainerHost: {
        alignContent:'center',
        paddingTop: 50
    },

});

export {style}
