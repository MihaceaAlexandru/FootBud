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
import MyComponent from './Components/Slide';

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
            <NavigationContainer style={styles.sectionTitle}>
              <Stack.Navigator
               screenOptions={{
                headerShown: false}}>
                <Stack.Screen
                  name="MyComponent"
                  component={MyComponent}/>
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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
