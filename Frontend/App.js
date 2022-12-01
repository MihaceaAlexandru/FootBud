import React from 'react';
import {Auth0Provider} from 'react-native-auth0'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {style} from '../Frontend/StyleSheet/AppStyle';
import MainPage from './Pages/MainPage';
import LogInPage from './Pages/LogInPage';
import FirstPage from './Pages/FirstPage';
import SignUp from './Pages/SignUpPage';
import QuestionPage from './Pages/QuestionPage';
import ProfilePage from './Pages/MainPages/ProfilePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
        <Auth0Provider domain={"dev-4k2uv2aw.us.auth0.com"} clientId={"JWzz5e2xII2NK7yKRzRY9nx5FR5Ngohz"}>
            <NavigationContainer style={style.container}>
              <Stack.Navigator
               screenOptions={{
                headerShown: false}}>
                <Stack.Screen
                  name="FirstPage"
                  component={FirstPage}/>
                <Stack.Screen 
                      name="Login" 
                      component={LogInPage} />
                <Stack.Screen
                  name='SignUpPage'
                  component={SignUp}/>
                <Stack.Screen
                  name="Question"
                  component={QuestionPage}/>  
                <Stack.Screen
                      name="MainPage"
                      component={MainPage}/>
                <Stack.Screen
                      name='ProfilePage'
                      component={ProfilePage}/>
              </Stack.Navigator>
          </NavigationContainer>
        </Auth0Provider>
  );
};

export default App;
