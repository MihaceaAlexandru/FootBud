import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import {style} from '../StyleSheet/FirstPageStyle';

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={style.appButtonContainer}>
      <Text style={style.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  export default AppButton;