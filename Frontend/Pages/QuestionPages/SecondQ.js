import React from "react";
import { View, Text } from "react-native";
import {style} from '../../StyleSheet/QPageStyle';
import QuestionHeader from '../../Headers/QuestionHeader';
import ButtonQuestion from "../../Buttons/ButtonQuestionSecond";


const SecondQ = ({route, navigation}) => {

    const {userId} = route.params;

    const handlerNextQuestion = () => {
        navigation.navigate('Question', {
            screen:'ThirdQ',
            params:{userId}
        });
    }  

    return(
        <View style={style.firstContainer}>
            <View>
                <QuestionHeader/>
            </View>
            <View style={style.textQuestionContainer}>
                <Text style={style.textQuestion}>Da? Cat timp?</Text>
            </View>
            <View style={{paddingTop:20}}>
                    <ButtonQuestion title={'Mai putin de un an'} onPress={handlerNextQuestion}/>
            </View>
            <View style={{paddingTop:20}}>
                    <ButtonQuestion title={'Intre 1-3 ani'} onPress={handlerNextQuestion}/>
            </View>
            <View style={{paddingTop:20}}>
                    <ButtonQuestion title={'3 ani +'} onPress={handlerNextQuestion}/>
            </View>
        </View>
    )
}

export default SecondQ;