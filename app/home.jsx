import { View, Text, Dimensions, Image, TouchableOpacity, Touchable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BodyParts from '../components/BodyParts';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useRouter } from 'expo-router';


{/*
    edges - prevents the background color from overlapping with the top of the screen
*/}

export default function Home(){

    const router = useRouter();

    const handleLogout = async () => {
        await signOut(auth);
        
    }

    return(
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']} >
       <StatusBar style='dark'></StatusBar>

       {/* Banner and profile pic image*/}
        <View className="flex-row justify-between items-center mx-5">
            <View className="space-y-2">
                <Text
                    style={{fontSize: hp(4.5)}}
                    className="font-bold tracking-wider text-neutral-700"
                >
                    Ready to 
                </Text>
                <Text
                    style={{fontSize: hp(4.5)}}
                    className="font-bold tracking-wider text-purple-500"
                >
                    Learn?
                </Text>
            </View>
        
            <View className="flex justify-center items-center space-y-2">
                <TouchableOpacity onPress={handleLogout}>
                <Image 
                    source={require('../assets/images/homepage.jpg')}                
                    style={{height: hp(6), width: wp(6)}}
                    className="rounded-full" 
                />
                </TouchableOpacity>
            </View>
        </View>

        {/* Top view component is for structure */}
        <View className="flex-row justify-between items-center mx-5">

            {/* BMI section */}
            <View>
                <TouchableOpacity 
                    onPress={()=> router.push('bmi')}
                    style={{width: wp(44), height: wp(52)}}
                >
                    <Image 
                        source={require('../assets/images/bmi2.png')}
                        resizeMode='cover'
                        style={{width: wp(44), height: wp(52)}}
                        className="rounded-[35px] absolute"
                    />

                    <Text 
                        style={{fontSize: hp(2.3), position: 'absolute', bottom: 1, right: 70, top: 170}}
                        className="text-black font-semibold text-center tracking-wide"
                    >
                        BMI 
                    </Text>
                </TouchableOpacity>
            </View>

            {/*  injuries section */}
            <View>
                <TouchableOpacity 
                    onPress={()=> router.push('injuries')}
                    style={{width: wp(44), height: wp(52)}}
                >
                    <Image 
                        source={require('../assets/images/injury2.png')}
                        resizeMode='cover'
                        style={{width: wp(44), height: wp(52)}}
                        className="rounded-[35px] absolute"
                    />

                    <Text 
                        style={{fontSize: hp(2.3), position: 'absolute', bottom: 1, right: 50, top: 170}}
                        className="text-black font-semibold text-center tracking-wide"
                    >
                        Injuries
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* Body parts list*/}
        <View className="flex-1" >
            <BodyParts />
        </View>
    </SafeAreaView>
    )
}