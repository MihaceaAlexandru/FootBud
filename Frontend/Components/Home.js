import { useRoute } from '@react-navigation/native';
import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const Home = ({navigation}) => {

    const route = useRoute();

    const pressHandle = () => {
        navigation.navigate('Login');
    }    

    let nume = route.params.name !== null ? route.params.name : 'Nu are nume';

    return(
        <View>
            <Text style={styles.sectionContainer}>{nume}</Text>
            <Button title={'Apasa'} onPress={pressHandle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 60,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

export default Home;