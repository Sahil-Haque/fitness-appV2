import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExerciseByBodyPart } from '../api/exerciseDB';
import { demoExercises } from '../constants';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Exercises(){
    const router= useRouter();

    const [exercises, setExercises] = useState(demoExercises);

    {/* Sends data that was passed from the previous component*/}
    const item = useLocalSearchParams();
    console.log('got item: ', item);

    {/* Using the API */}
    useEffect(()=> {
        //if(item) getExercises(item.name);
    }, [item]);

    const getExercises = async (bodypart)=> {
        let data = await fetchExerciseByBodyPart(bodypart);
        //console.log('got data: ', data);
        setExercises(data);
    }

    return(
        <ScrollView>
            <StatusBar style="light" />
            <Image 
                source={item.image}
                style={{width: wp(100), height: hp(45)}}
                className="rounded-b-[40px]"
            />
        </ScrollView>
    )
}