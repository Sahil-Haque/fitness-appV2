import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';


export default function exerciseDetails() {
    const item = useLocalSearchParams();
    const router = useRouter();
    
    return(
        <View className="flex flex-1">
           <View className="shadow-md bg-neutral-200 rounded-b-[40px]" >
                <Image 
                    source={{uri: item.gifUrl}}
                    contentFit='cover'
                    style={{width: wp(100), height: wp(100)}}
                    className="rounded-b-[40px]"
                />
           </View>


        {/* Back button*/}
        <TouchableOpacity 
                onPress={()=> router.back()}
                className="bg-purple-500 mx-4 absolute flex rounded-[15px]" 
                style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
            >
                <Text className="flex justify-center pt-3 pl-1 font-semibold">
                    BACK
                </Text>
                  
            </TouchableOpacity>

        {/* Information about each exercise */}
        <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}>
            <Text
                style={{fontSize: hp(3.5)}}
                className="text-neutral-800 tracking-wide font-semibold" 
            >
                {item.name}
                
            </Text>

            <Text
                style={{fontSize: hp(2)}}
                className="text-neutral-700 tracking-wide" 
            >
                Equipment: <Text className="font-bold text-neutral-800">
                        {item?.equipment}
                </Text>
                
            </Text>

            <Text
                style={{fontSize: hp(2)}}
                className="text-neutral-700 tracking-wide" 
            >
                Secondary muscles: <Text className="font-bold text-neutral-800">
                        {item?.secondaryMuscles}
                </Text>
                
            </Text>

            <Text
                style={{fontSize: hp(2)}}
                className="text-neutral-700 tracking-wide" 
            >
                Targets: <Text className="font-bold text-neutral-800">
                        {item?.target}
                </Text>
                
            </Text>

            <Text
                style={{fontSize: hp(3)}}
                className="text-neutral-800 tracking-wide font-semibold" 
            >
                instructions
                
            </Text>

            {/*
                Split - seperates the texts into sentences by displaying the text on a 
                        new line after every comma as stated by (',) 
            */}
            {
                item.instructions.split(',').map((instruction, index)=>{
                    return(
                        <Text
                            key={instruction}
                            style={{fontSize: hp(1.7)}}
                            className="text-neutral-800"
                        >

                            {instruction}

                        </Text>
                    )
                })
            }

        </ScrollView>





        </View>
    )
}