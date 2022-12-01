import React from "react";
import { View, Text } from "react-native";
import {style} from '../../StyleSheet/QPageStyle';
import QuestionHeader from '../../Headers/QuestionHeader';
import ButtonQuestion from "../../Buttons/ButtonQuestionSecond";

const ThirdQ = ({route ,navigation}) => {

    const {userId} = route.params;

    const handlerNextQuestion = () => {
        navigation.navigate('Question', {
            screen:'FourthQ',
            params:{userId}
        });
    } 

    return(
        <View style={style.firstContainer}>
        <View>
            <QuestionHeader/>
        </View>
        <View style={style.textQuestionContainer}>
            <Text style={style.textQuestion}>De cate</Text>
            <Text style={style.textQuestion}>ori joci?</Text>
        </View>
        <View style={{paddingTop:20}}>
                <ButtonQuestion title={'Saptamanal'} onPress={handlerNextQuestion}/>
        </View>
        <View style={{paddingTop:20}}>
                <ButtonQuestion title={'Lunar'} onPress={handlerNextQuestion}/>
        </View>
        <View style={{paddingTop:20}}>
                <ButtonQuestion title={'De cateva ori pe an'} onPress={handlerNextQuestion}/>
        </View>
    </View>
    )
}

export default ThirdQ;