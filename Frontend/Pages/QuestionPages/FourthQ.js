import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import {style} from '../../StyleSheet/QPageStyle';
import QuestionHeader from '../../Headers/QuestionHeader';
import ButtonQuestion from "../../Buttons/ButtonQuestionSecond";

const baseUrl = 'http://localhost:1337/api/profils/';

const FourthQ = ({route,navigation}) => {

    const {userId} = route.params;
    const [profileLevel, setProfileLevel] = useState(
        {data:{
          Level:''
        }});

    const update = () => {
        fetch(baseUrl + userId, 
        {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(profileLevel)
        })
        .then(()=>navigation.navigate('MainPage'))
    }

    useEffect(()=>{
        if(profileLevel.data.Level !== ''){
            update();
        } 
    },[profileLevel.data.Level])

    return(
       <View style={style.firstContainer}>
        <View>
            <QuestionHeader/>
        </View>
        <View style={style.textQuestionContainer}>
            <Text style={style.textQuestion}>Ce rating</Text>
            <Text style={style.textQuestion}>ti-ai da?</Text>
            <Text style={style.textSecond}>Raspunde sincer la intrebare</Text>
            <Text style={style.textSecond}>Pentru o experienta mai buna</Text>
        </View>
        <View style={{paddingTop:20}}>
                <ButtonQuestion title={'Incepator'} onPress={()=>{
                     setProfileLevel({data:{
                            Level:'Incepator'
                        }});
                    }}/>
        </View>
        <View style={{paddingTop:20}}>
                <ButtonQuestion title={'Intermediar'} onPress={()=>{
                     setProfileLevel({data:{
                        Level:'Intermediar'
                    }});
                }}/>
        </View>
        <View style={{paddingTop:20}}>
                <ButtonQuestion title={'Pro'} onPress={()=>{
                    setProfileLevel({data:{
                        Level:'Pro'
                    }});
                }}/>
        </View>
    </View>
    )
}

export default FourthQ;