import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExerciseByBodyPart } from '../api/exerciseDB';
import { demoExercises } from '../constants';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';

export default function Exercises(){
    const router= useRouter();

    const [exercises, setExercises] = useState(demoExercises);

    {/* Sends data that was passed from the previous component*/}
    const item = useLocalSearchParams();
    //console.log('got item: ', item);

    {/* Using the API */}
    useEffect(()=> {
        //if(item) getExercises(item.name);
    }, [item]);

    const getExercises = async (bodypart)=> {
        let data = await fetchExerciseByBodyPart(bodypart);
        //console.log('got data: ', data);
        setExercises(data);
    }

    return (
        <ScrollView>
        
            {/* customisation for exercise image on the top of the page*/}
            <StatusBar style="light" />
            <Image 
                source={item.image}
                style={{width: wp(100), height: hp(45)}}
                className="rounded-b-[40px]"
            />

            {/*Back button for exercises screen */}
             {/* NEED TO ADD BACK BUTTON HERE*/}
            <TouchableOpacity 
                onPress={()=> router.back()}
                className="bg-purple-500 mx-4 absolute flex rounded-[15px]" 
                style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
            >
                <Text className="flex justify-center pt-3 pl-1 font-semibold">
                    BACK
                </Text>
                  
            </TouchableOpacity>

             {/* Exercises*/}
            <View className="mx-4 space-y-3 mt-4">
                <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-700" >
                    {item.name} exercises
                </Text>
             
                {/* 
                    Exercise list section
                    Should output list of exercises for the selected muscle group from the API
                */}
                <View className="mb-10">
                    <ExerciseList data={exercises} />
                </View>
            </View>
        </ScrollView>
    )
}