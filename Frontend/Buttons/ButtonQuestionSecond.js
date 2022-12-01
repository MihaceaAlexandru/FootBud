import React from "react";
import { TouchableOpacity, Text } from "react-native";
import {style} from '../StyleSheet/QPageStyle'

const ButtonQuestion = ({ onPress, title}) => {
    return(
        <TouchableOpacity onPress={onPress} style={style.btnContainerSecond} >
            <Text style={style.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonQuestion;