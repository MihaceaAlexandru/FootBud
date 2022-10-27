import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import {style} from '../StyleSheet/FirstPageStyle'


const ButtonStart = ({ onPress, title }) => {
    return(
        <TouchableOpacity onPress={onPress} style={style.btnStart}>
            <Text style={style.btnStartText}>{title}</Text>
        </TouchableOpacity>
    )

}

export default ButtonStart;