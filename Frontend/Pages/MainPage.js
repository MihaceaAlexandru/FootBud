import React, { useRef } from 'react';
import { useEffect ,useState } from 'react';
import {Text, View, Image, SafeAreaView, TouchableOpacity, Animated, Button} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {style} from '../StyleSheet/MainPageStyle';
import profileIcon from '../assets/media/profileWhite.png';
import friendIcon from '../assets/media/friendsWhite.png';
import invitesIcon from '../assets/media/invitesWhite.png';
import privacyIcon from '../assets/media/editWhite.png';
import securityIcon from '../assets/media/securityWhite.png';
import footBudIcon from '../assets/media/FootBudIconHeader.png';
import ball from '../assets/media/FOOTBUDmingie-01.png';



const MainPage = ({navigation}) => {
    const {authorize, clearSession, user} = useAuth0();
    const [showMeniu, setShowMeniu] = useState(true);
    // const [profile,setProfile] = useState();    
    const [displayOption, setDisplayOption] = useState('none');
    const transValue = useRef(new Animated.Value(0)).current;

    const MeniuBtn = (title,photo,page) => {
        return(
            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate(page)}>
                <View style={style.meniuBtns}>
                    <Image source={photo} style={style.btnIcon}/>
                </View>
                <Text style={style.txt}>{title}</Text>    
            </TouchableOpacity>
        );
    }

    // useEffect(()=>{
    //     fetch(`http://localhost:1337/api/profils?filters[Email]=${user.email}`)
    //     .then((res)=>res.json())
    //     .then((res)=>setProfile(res))
    // },[])

    const animateMeniu = () => {
        setDisplayOption('flex');
        Animated.timing(transValue,{
            toValue: showMeniu ? 0 : -300,
            duration:300,
            useNativeDriver:true,
        }).start();
        setShowMeniu(!showMeniu);
    }

    const onLogout = async () => {
        // try {
          await clearSession();
          navigation.navigate('FirstPage');
    //     } catch (e) {
    //       console.log('Log out cancelled');
    //     }
      };

    return(
        <SafeAreaView style={style.container}>
            <View style={style.headerContainer}>
                <TouchableOpacity onPress={()=>{
                    animateMeniu();
                }} style={style.meniuButton}>
                    <View style={style.line}></View>
                    <View style={style.line}></View>
                    <View style={style.line}></View>
                </TouchableOpacity>
                <Image source={footBudIcon} style={style.icon}/>
                <TouchableOpacity>
                    <Image source={ball} style={style.iconBall}/>
                </TouchableOpacity>
            </View>
            <Animated.View style={{
                backgroundColor:'#00ef3e',
                flexGrow:1,
                position:'absolute',
                top:0,
                bottom:0,
                right:'25%',
                left:0,
                transform:[
                    {translateX:transValue}
                ],
                flexDirection:'column',
                display:displayOption
                }}>
                    <TouchableOpacity onPress={() =>  animateMeniu()} style={style.closeBtn} >
                        <View style={style.closeBtnXOne}></View>
                        <View style={style.closeBtnXTwo}></View>
                    </TouchableOpacity>
                    <View style={{paddingTop:70}}>
                        {MeniuBtn('Profile',profileIcon,'ProfilePage')}
                        {MeniuBtn('My Friends', friendIcon)}
                        {MeniuBtn('Invites', invitesIcon)}
                        {MeniuBtn('Privacy Policy', privacyIcon)}
                        {MeniuBtn('Security', securityIcon)}
                        <Button onPress={onLogout} title={'LogOut'}></Button>
                    </View>
            </Animated.View>
        </SafeAreaView>
    )
}


export default MainPage;