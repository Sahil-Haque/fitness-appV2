import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function ExerciseList(data){
    const router = useRouter();
    return (
        <View>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item=> item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 60, paddingTop: 20}}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={({item, index})=> <ExerciseCard router={router} index={index} item={item} />}
            />
        </View>
    )
}

{/*
    The gif URL stems from the demo data which is derived from the API, 
    the demo data is only being used to allow me to design the UI of the app.
*/}



const ExerciseCard = ({item, router, index})=> {
    return(
        <View>

            {/* 
                Outputs the gifs of each of the exercises
                within the selected muscle group
            */}
            <TouchableOpacity 
                onPress={()=> router.push({pathname: '/exerciseDetails', params: item}) }
                className="flex py-3 space-y-2"
                >
                <View className="bg-neutral-200 shadow rounded-[25px]">
                    <Image 
                        source={{uri: item.gifUrl}}
                        contentFit='cover'
                        style={{width: wp(44), height:wp(52)}}
                        className="rounded-[25px]"
                    />
                </View>

            
            
                {/* 
                    Outputs the name of each exercises for each gif,
                    if the name is longer than 20 characters then the remaining text will be replaced with ...

                    If the name is shorter than 20 characters then the whole name will be shown
                */}

                <Text
                    style={{fontSize: hp(1.7)}}
                    className="text-neutral-700 font-semibold ml-1 tracking-wide"
                >
                    {
                        item?.name?.length>20? item.name.slice(0,20) + '...': item.name
                    }

                </Text>
            </TouchableOpacity>
        </View>
    )
}