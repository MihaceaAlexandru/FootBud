import React from 'react';
import {View, Text,Button, SliderBase} from 'react-native';
import {style} from '../StyleSheet/Style';
import SlidingUpPanel from 'rn-sliding-up-panel';
import  AppButton  from '../Buttons/Button';
import { useRoute } from '@react-navigation/native';




const MyComponent = ({navigation}) => {
    const route = useRoute();

    const pressHandle = () => {
        navigation.navigate('Login');
    }  
    return (
      <View style={style.container}>
        <Button title='GET STARTED' onPress={() => this._panel.show()} />
        <SlidingUpPanel ref={c => this._panel = c}>
          <View style={style.containerSecond}>
            <View style={style.btnContainerPlayer}>
                <AppButton onPress={pressHandle} title='JOIN AS A PLAYER' size="sm" backgroundColor="#1e2724"/>
            </View>
            <View style={style.btnContainerHost}>
                <AppButton title='JOIN AS A HOST' size="sm" backgroundColor="#1e2724"/>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    )
 
}

export default MyComponent;