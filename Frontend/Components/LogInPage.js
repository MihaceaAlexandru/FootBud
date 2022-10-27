import React from 'react';
import { useState, useEffect} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {style} from '../StyleSheet/LogInPageStyle';
import AppButton from '../Buttons/Button';


const baseUrl = 'http://localhost:1337/api';



const LogInPage = ({navigation}) => {
    const {authorize, clearSession, user} = useAuth0();
    const [profile, setProfile] = useState();

    useEffect(() => {
      setProfile(user);
    },[user]);
    
  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'});
        navigation.navigate('Home',profile);
    } catch (e) {
      console.log(e);
    }
  };

  const OnSignUp = async () => {
    try {
      await authorize({mode: 'signUp'});
      // console.log(user);
      // navigation.navigate('Home',profile.name);
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
       <View style={style.container}>
          <View style={style.containerButtons}>
            <AppButton onPress={OnSignUp} title='Sign Up' size="sm" backgroundColor="#1e2724"/>    
          </View>
          <View style={style.containerButtons}>
          <AppButton onPress={onLogin} title='Log In' size="sm" backgroundColor="#1e2724"/>  
          </View>
        <Button onPress={onLogout} title={'LogOut'}></Button>
        <Text>{date}</Text>
        {/* <Text>{JSON.stringify(profile)}</Text> */}
       </View>
    )    
}

export default LogInPage;