import React from "react";
import { useState, useEffect } from "react";
import { View, Text, TextInput, Alert, Pressable, Modal } from "react-native";
import {style} from '../StyleSheet/SignUpStyle';
import SelectDropdown from 'react-native-select-dropdown'
import AppButton from "../Buttons/ButtonSignUp";
import {useAuth0} from 'react-native-auth0';

const citysArray =[{"nume":"Alba"},
{"nume":"Arad"},{"nume":"Argeş"},
{"nume":"Bacău"},{"nume":"Bihor"},
{"nume":"Bistriţa-Năsăud"},{"nume":"Botoşani"},
{"nume":"Brăila"},{"nume":"Braşov"},
{"nume":"Bucureşti"},{"nume":"Buzău"},
{"nume":"Călăraşi"},{"nume":"Caraş-Severin"},
{"nume":"Cluj"},{"nume":"Constanţa"},
{"nume":"Covasna"},{"nume":"Dâmboviţa"},
{"nume":"Dolj"},{"nume":"Galaţi"},
{"nume":"Giurgiu"},{"nume":"Gorj"},
{"nume":"Harghita"},{"nume":"Hunedoara"},
{"nume":"Ialomiţa"},{"nume":"Iaşi"},
{"nume":"Ilfov"},{"nume":"Maramureş"},
{"nume":"Mehedinţi"},{"nume":"Mureş"},
{"nume":"Neamţ"},{"nume":"Olt"},
{"nume":"Prahova"},{"nume":"Sălaj"},
{"nume":"Satu Mare"},{"nume":"Sibiu"},
{"nume":"Suceava"},{"nume":"Teleorman"},
{"nume":"Timiş"},{"nume":"Tulcea"},
{"nume":"Vâlcea"},{"nume":"Vaslui"},
{"nume":"Vrancea"}]

const baseUrl = 'http://localhost:1337/api/profils';


const SignUp = ({navigation}) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [age, setAge] = useState();
    const [ages, setAges] = useState([]);
    const {user} = useAuth0();
    const [modalVisible, setModalVisible] = useState(false);
    const [citys, setCitys] = useState([]);
    const [city, setCity] = useState('');
    const [validation, setValidaton] = useState();
    const [NumberOfGames] = useState(0);
    const [profile, setProfile] = useState(
        {data:{
          Name:'',
          Age:'',
          City:'',
          Phone:'',
          Email:'',
          NumberOfgames:''
        }});
    
    const handleCity = () => {
        const aux = [];
        citysArray.map((data) => (
            aux.push(data.nume)
        ))
        setCitys(aux);
    }

    const handleAges = () =>{
        const aux2 = [];
        for(let i = 0; i < 100; i++){
            aux2.push(i);
        }
        setAges(aux2);
    }

    const createProfile = () => {
        if(name === '' || phoneNumber === '' || age === '' || city === ''){
            Alert.alert('Empty fields!')
        }
        else{
            fetch(baseUrl,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(profile)
              })
              .then((res) => res.json())
              .then((res)=>{
                setValidaton(JSON.stringify(res))
                console.log(JSON.stringify(res))
              })
              .then(()=> navigation.navigate('Question',{
                screen:'FirstQ',
                params:{profile},
              }))
              .catch((error) => console.log(error))
        }
    }

    useEffect(()=> {
        handleCity();
        handleAges();
        setProfile({data:{
            Name:name,
            Age:age,
            City:city,
            Phone:phoneNumber,
            Email:user.email,
            NumberOfgames:NumberOfGames,
          }});
    },[name,age,phoneNumber,city,validation])

    return(
        <View style={style.container}>
           <View style={style.containerSecond}>
                <Text style={style.textContainer}>Create new</Text>
                <Text style={style.textContainer}>account</Text>
                <View
                  style={{ 
                    marginRight:60,
                    marginTop:28}}>
                    <TextInput style={style.input} 
                        placeholder="Name" 
                        placeholderTextColor='rgba(255, 255, 255, 0.6)'
                        value={name} 
                        onChangeText={setName}/>
                </View>
                <View
                style={{ 
                   marginRight:60,
                   marginTop:0}}>
                    <TextInput style={style.input} 
                        placeholder="Phone number" 
                        placeholderTextColor='rgba(255, 255, 255, 0.6)'
                        value={phoneNumber} 
                        onChangeText={setPhoneNumber}/>
                </View>
              
                
                <View style={style.constainerSelectors}>
                    <View  style={style.contentSelect}>
                        <Text style={style.selectText}>Age</Text>
                        <SelectDropdown
                            data={ages}
                            onSelect={(selectedItem, index) => {
                                setAge(selectedItem);
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            buttonStyle={style.selectBottonAge}
                            buttonTextStyle={style.selectButtonText}
                        />
                    </View>
                    
                    <View>
                    <Text style={style.selectText}>City</Text>
                    <SelectDropdown
                            data={citys}
                            onSelect={(selectedItem, index) => {
                                setCity(selectedItem)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            buttonStyle={style.selectBottonCity}
                            buttonTextStyle={style.selectButtonText}
                        />
                    </View>
                </View>

                <View style={style.buttonViewSignOut}>
                    <AppButton title='Sign Up' backgroundColor="#1e2724" onPress={createProfile}/>
                </View>

                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={style.centeredView}>
                            <View style={style.modalView}>
                                <Text style={style.modalText}>
                                    {JSON.stringify(profile)}
                                </Text>
                                <Pressable
                                style={[style.button, style.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={style.textStyle}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>

                <Pressable style={style.term} onPress={() => setModalVisible(true)}>
                    <Text style={{color:'rgba(255, 255, 255, 0.6)', fontSize:12}}>By signing up you agree with our </Text>
                    <Text style={{color:'rgba(255, 255, 255, 0.6)',fontSize:12, textDecorationLine:'underline'}}>Terms and Conditions</Text>
                </Pressable>
           </View>
        </View>
    )
}

export default SignUp;