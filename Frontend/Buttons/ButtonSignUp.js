import React from "react";
import { TouchableOpacity, Text } from "react-native";
import {style} from '../StyleSheet/SignUpStyle';


const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={style.appButtonContainer}>
      <Text style={style.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  export default AppButton;