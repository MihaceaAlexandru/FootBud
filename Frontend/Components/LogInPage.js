import React from 'react';
import { useState } from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
// import axios from "axios";

const baseUrl = 'http://localhost:1337/api';



const LogInPage = ({navigation}) => {
    const {authorize, clearSession, user} = useAuth0();
    const [email, setEmail] = useState('');

  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'});
        navigation.navigate('Home',user);
    } catch (e) {
      console.log(e);
    }
  };

  const OnSignUp = async () => {
    try {
      await authorize({mode: 'signUp'});
       
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  const date = user !== null ? user.name : "Nu este nimeni logat!"
    return(
       <View>
        <Button onPress={onLogin} title={'LogIn as a User'}></Button>
        <Button onPress={onLogin} title={'LogIn'}></Button>
        <Button onPress={OnSignUp} title={'SignUp'}></Button>
        <Button onPress={onLogout} title={'LogOut'}></Button>
        <Text>{date}</Text>
       </View>
    )    
}

export default LogInPage;