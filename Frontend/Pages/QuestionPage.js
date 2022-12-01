import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstQ from './QuestionPages/FirstQ';
import SecondQ from './QuestionPages/SecondQ';
import ThirdQ from './QuestionPages/ThirdQ';
import FourthQ from './QuestionPages/FourthQ';

const Stack = createNativeStackNavigator();


const QuestionPage = () => {
    return(
            <Stack.Navigator
                screenOptions={{
                headerShown: false}}>
                <Stack.Screen
                  name="FirstQ"
                  component={FirstQ}
                  />
                <Stack.Screen
                  name="SecondQ"
                  component={SecondQ}/>
                <Stack.Screen
                  name="ThirdQ"
                  component={ThirdQ}/>
                <Stack.Screen
                  name="FourthQ"
                  component={FourthQ}/>
               </Stack.Navigator>
          
    )
}

export default QuestionPage;