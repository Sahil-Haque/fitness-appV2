import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';


export default function SignUp(){
    
    const router = useRouter();
    const navigation = useNavigation();

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    {/*
        Asynchoronous function that acts seperately to the program
        Checks if the user has entered both the email and password with correct syntax
        If it is true then the details will be saved inot firebases database
    */}
    const handleSubmit = async ()=> {
        if(email && password){
            try{
                await createUserWithEmailAndPassword(auth, email, password)
            }catch(err){
                console.log('Got error: ', err.message);
            }
        }
    }

    return(
       <View className="flex-1 bg-transparent">
            {/*<Image className="h-full w-full absolute" source={require('../assets/images/homepage.jpg')} /> */}

            <SafeAreaView className="flex">
                <View>
                    {/* Back button */}
                    <TouchableOpacity 
                    onPress={()=> router.back()}
                    className="bg-purple-500 mx-4 absolute flex rounded-[15px]" 
                    style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
                    >
                    <Text className="flex justify-center pt-3 pl-1 font-semibold">
                        BACK
                    </Text>
                  
                    </TouchableOpacity>
                </View>

            </SafeAreaView>

            {/* Login form */}  
            <View
                className="flex-1 bg-slate-400 px-8 pt-40 mt-5"
                style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
            >

                <View className="form space-y-2">
                    <Text className="text-gray-700 ml-4">
                        Full name
                    </Text>
                    <TextInput 
                        className="p-4 bg-gray-200 text-gray-500 rounded-2xl"
                        value="Leave this empty "
                        placeholder='Enter Username'
                    />

                    <Text className="text-gray-700 ml-4">
                        Email Address
                    </Text>
                    <TextInput 
                        className="p-4 bg-gray-200 text-gray-700 rounded-2xl"
                        value={email}
                        onChangeText={value => setEmail(value)}
                        placeholder='Enter Email'
                    />
                    
                    <Text className="text-gray-700 ml-4">
                        Password
                    </Text>
                    <TextInput 
                        className="p-4 bg-gray-200 text-gray-700 rounded-2xl"
                        secureTextEntry
                        value={password}
                        onChangeText={value => setPassword(value)}
                        placeholder='Enter Password'
                    />

                    <TouchableOpacity
                        className="py-3 bg-purple-300 rounded-xl"
                        onPress={handleSubmit}
                    >
                        <Text className="font-xl font-bold text-center text-gray-700">
                            Sign up
                        </Text>
                    </TouchableOpacity>

                    {/* Redirects user to sign up page if they do not have an account */}
                    <View className="flex-row justify-center mt-7">
                        <Text className="text-gray-700 font-semibold">Already have an account?</Text>
                        <TouchableOpacity onPress={()=> router.push('login')}>
                            <Text className="font-semibold text-purple-700">Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
       </View>
    )
}



