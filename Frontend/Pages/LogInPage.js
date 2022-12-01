import React from 'react';
import { useState, useEffect} from 'react';
import { View, Button, Text } from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {style} from '../StyleSheet/LogInPageStyle';
import AppButton from '../Buttons/Button';


const baseUrl = 'http://localhost:1337/api/profils';

const LogInPage = ({navigation}) => {
  const {authorize, clearSession, user} = useAuth0();
  const [whereTo, setWhereTo] = useState('');
     
  const onLogin = async () => {
    try {
      setWhereTo('MainPage');
      await authorize({scope: 'openid profile email'});
    } catch (e) {
      console.log(e);
    }
  };

  const OnSignUp = async () => {
    try {
      setWhereTo('SignUpPage')
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

  useEffect(()=>{
    if(user !== null){
      if(whereTo === 'MainPage'){
        navigation.navigate('MainPage');
      }else if(whereTo === 'SignUpPage'){
        navigation.navigate('SignUpPage');
      }
    }
    setWhereTo('');
  },[user])

  
    return(
       <View style={style.container}>
          <View style={style.containerButtons}>
            <AppButton onPress={OnSignUp} title='Sign Up' size="sm" backgroundColor="#1e2724"/>    
          </View>
          <View style={style.containerButtons}>
            <AppButton onPress={onLogin} title='Log In' size="sm" backgroundColor="#1e2724"/>  
          </View>
        <Button onPress={onLogout} title={'LogOut'}></Button>
        <Text>{JSON.stringify(user)}</Text>
        <Text>{whereTo}</Text>
      </View>
    )    
}

export default LogInPage;