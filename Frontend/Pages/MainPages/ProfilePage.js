import React from 'react';
import { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, Image, Alert,  StyleSheet} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {style} from '../../StyleSheet/ProfilePageStyle';
import icon from '../../assets/media/FOOTBUDLOGOICON-02.png';
import profileIcon from '../../assets/media/profileWhite.png';
import Pie from 'react-native-pie';

const ProfilePage = ({ navigation }) => {
    const {user} = useAuth0();
    const [age, setAge] = useState(); 
    const [city, setCity] = useState();
    const [level, setLevel] = useState();
    const [levelChart, setLevelChart] = useState();
    const [gamesPlayed, setGamesPlayed] = useState();
    const [relianiltyProcent, setReliabilutyProcent] = useState(100);
    const [reliability, setReliability] = useState('High');
    
    useEffect(()=>{
        fetch(`http://localhost:1337/api/profils?filters[Email]=${user.email}`)
        .then((res)=>res.json())
        .then((res)=> {
            // Alert.alert(JSON.stringify(res));
            setAge(res.data[0].attributes.Age);
            setCity(res.data[0].attributes.City);
            setLevel(res.data[0].attributes.Level);
            setGamesPlayed(res.data[0].attributes.NumberOfgames);
        })

        if(level === 'Pro'){
            setLevelChart(10)
        }else if(level === 'Intermediar'){
            setLevelChart(105)
        }else if(level === 'Incepator'){
            setLevelChart(210)
        }
    },[level])

    return(
        <SafeAreaView style={style.container}>
            <ScrollView style={style.scrollview}>

                <TouchableOpacity style={style.closeBtn} onPress={() => navigation.navigate('MainPage')}>
                    <View style={style.closeBtnLineOne}></View>
                    <View style={style.closeBtnLineTwo}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
                    <Image source={icon} style={style.icon}/>
                </TouchableOpacity>

                <View style={style.secondContainer}>
                    <View style={style.iconContainer}>
                        <Image source={profileIcon} style={style.profileIcon}/>
                    </View>
                    <View style={style.titleContainer}>
                        <Text style={style.title}>ME</Text>
                        <Text style={style.descriptionUser}>{age} , {city}</Text>
                    </View>
                </View>

                <View style={style.followBtnContainer}>
                    <TouchableOpacity style={style.followBtn}>
                        <Text style={style.followTxt}>Follow</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.levelSubtitle}>
                    <Text style={style.levelSubtitleTxt}>Level</Text>
                    <Text style={style.levelTxt}>{level}</Text>
                </View>

                <View style={style.levelBarConatiner}>
                    <View style={style.levelBegginer}></View>
                    <View style={style.levelIntermediar}></View>
                    <View style={style.levelPro}></View>
                    <View style={{flexDirection:'column',right:levelChart}}>
                        <View style={style.levelLine}></View>
                        <View style={style.levelDot}></View>
                    </View>
                </View>

                <View style={style.gamesNumberContainer}>
                    <Text style={style.gamesNumber}>{gamesPlayed}</Text>
                    <View style={{flexDirection:'column'}}>
                        <Text style={style.gamesNumberTxt}>Games</Text>
                        <Text style={style.gamesNumberTxt}>Played</Text>
                    </View>
                </View>

                <View style={style.reliabilityContainer}>
                    <Text style={style.reliabilityTitle}>Reliability</Text>
                    <View style={style.reliabilityCharContainer}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={style.reliabilityTxt}>Low 0% - 60%</Text>
                            <Text style={style.reliabilityTxt}>Mediun 60% - 80%</Text>
                            <Text style={style.reliabilityTxt}>High 80% - 100%</Text>
                        </View>
                        <View style={{
                            left:20
                        }}>
                            <View style={{ width: 175, alignItems: 'center' }}>
                                <Pie
                                    radius={80}
                                    innerRadius={65}
                                    sections={[
                                    {
                                        percentage: relianiltyProcent,
                                        color: '#00ef3e',
                                    },
                                    ]}
                                    backgroundColor="#808080"
                                />
                                <View style={style.gauge}>
                                    <Text style={style.gaugeText}>
                                    {relianiltyProcent}%
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={style.reliabilityValueContainer}>
                    <Text style={style.reliabilityValueTxt}>{reliability}</Text>
                    <Text style={style.reliabilityValueTxt}>Reliability</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfilePage;