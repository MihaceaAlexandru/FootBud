import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

const LogInPage = () => {
    const {authorize, clearSession, user} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'});
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


    return(
       <View>
        <Button onPress={onLogin} title={'LogIn as a User'}></Button>
        <Button onPress={onLogin} title={'LogIn as a Host'}></Button>
        <Button onPress={onLogout} title={'LogOut'}></Button>
       </View>
    )    
}

export default LogInPage;