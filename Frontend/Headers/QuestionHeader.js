import React from "react";
import { View, Text, Image } from "react-native";
import {style} from '../StyleSheet/QPageStyle';

const QuestionHeader = () => {
    return(
        <View style={style.headerContainerComponent}>
            <View style={style.title}>
                <Text style={{fontSize:35, color:'white', fontWeight: "bold"}}>Care e</Text>
                <Text style={{fontSize:35, color:"#00ef3e", fontWeight: "bold"}}>nivelul tau?</Text>
                <View style={style.bottomLine}></View>
            </View>
            <View style={style.logoContainer}>
                <Image source={require('../assets/media/FootBudIconHeader.png')} style={style.icon}/>
            </View>
        </View>
    )
}

export default QuestionHeader;