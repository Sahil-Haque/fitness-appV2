import { View, Text, FlatList } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { bodyParts } from '../constants';


export default function BodyParts(){
    return(
        <View className="mx-4">
            <Text style={{fontSize: hp(3) }} className="font-semibold text-neutral-700">
                Exercises
            </Text>

            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={item=> item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={({item, index})=> <BodyPartCard index={index} item={item} />}
            />
        </View>
    )
}

const BodyPartCard = ({item, index})=> {
    return(
        <Text> Item</Text>
    )
}
