/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Auth0Provider} from 'react-native-auth0'; 
import LogInPage from './Components/LogInPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import FirstPage from './Components/FirstPage';
import {style} from '../Frontend/StyleSheet/AppStyle';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
        <Auth0Provider domain={"dev-4k2uv2aw.us.auth0.com"} clientId={"vET0Toex0cObbEirARKjdRu2UFaasO5U"}>
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
                      name="Home"
                      component={Home}
                    />
              </Stack.Navigator>
          </NavigationContainer>
        </Auth0Provider>
  );
};

export default App;
