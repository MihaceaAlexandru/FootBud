import React from 'react';
import {View, Text,Button, Image} from 'react-native';
import {style} from '../StyleSheet/FirstPageStyle';
import SlidingUpPanel from 'rn-sliding-up-panel';
import  AppButton  from '../Buttons/Button';
import { useRoute } from '@react-navigation/native';
import ButtonStart from '../Buttons/ButtonStart';

const FirstPage = ({navigation}) => {
    const route = useRoute();

    const pressHandle = () => {
        navigation.navigate('Login');
    }  
    return (
      <View style={style.container}>
        <View style={style.logoContainer}>  
          <Image source={require('../assets/media/FootBudLogo.png')} style={style.logo}/>
        </View>
        <View style={style.containerStart}>
          <View style={style.arrowThree}></View>
          <View style={style.arrowTwo}></View>
          <View style={style.arrow}></View>
          <ButtonStart onPress={() => this._panel.show()} title='GET STARTED'/>
        </View>
        
       
        <SlidingUpPanel ref={c => this._panel = c}>
          <View style={style.containerSecond}>
            <View style={style.btnContainerPlayer}>
                <AppButton onPress={pressHandle} title='JOIN AS A PLAYER' size="sm" backgroundColor="#1e2724"/>
            </View>
            <View style={style.btnContainerPlayer}>
                <AppButton title='JOIN AS A HOST' size="sm" backgroundColor="#1e2724"/>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    )
 
}

export default FirstPage;