import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';


export default function Exercises(){
    const router= useRouter();
    {/* Sends data that was passed from the previous component*/}
    const item = useLocalSearchParams();
    console.log('got item: ', item);
    return(
        <View className="mt-20">
            <Text>
                exercises
            </Text>

            <TouchableOpacity onPress={()=> router.back}>
                <Text>Go back</Text>
            </TouchableOpacity>
        </View>
    )
}