import React from "react";
import { useEffect, useState } from "react";
import { View, Text} from "react-native";
import {style} from '../../StyleSheet/QPageStyle';
import QuestionHeader from '../../Headers/QuestionHeader';
import ButtonQuestion from "../../Buttons/ButtonQuestionsFirst";

const FirstQ = ({route,navigation}) => {
    const {profile} = route.params;
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userId, setUserId] = useState();

    const handlerNextQuestionYes = () => {
        navigation.navigate('Question', {
            screen:'SecondQ',
            params:{userId}
        });
    } 

    const handlerNextQuestionNo = () => {
        navigation.navigate('Question', {
            screen:'ThirdQ',
            params:{userId}
        });
    } 


    useEffect(()=>{
        setPhoneNumber(profile.data.Phone);
        fetch('http://localhost:1337/api/profils?filters[Phone]=' + phoneNumber)
        .then((res) => res.json())
        .then((res) => setUserId(JSON.stringify(res.data[0].id)))
    })

    return(
        <View style={style.firstContainer}>
            <View>
                <QuestionHeader/>
            </View>
            <View style={style.textQuestionContainer}>
                <Text style={style.textQuestion}>Ai facut</Text>
                <Text style={style.textQuestion}>vreodata</Text>
                <Text style={style.textQuestion}>fotbal?</Text>
                <View style={{paddingTop:20}}>
                    <ButtonQuestion title={'DA'} onPress={handlerNextQuestionYes}/>
                </View>
                <View style={{paddingTop:20}}>
                    <ButtonQuestion title={'NU'} onPress={handlerNextQuestionNo}/>
                </View>
            </View>
        </View>
    )
}

export default FirstQ;

