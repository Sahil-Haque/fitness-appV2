import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from "../app";
import Login from "../app/Login";
import SignUp from "../app/signUp";
import Home from "../app/home";
import useAuth from "../hooks/useAuth";

const Stack = createNativeStackNavigator();


export default function AppNavigation() {

    const {user} = useAuth;
    if(user){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" options={{headerShown: false}} component={Home}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }else{
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Index">
                    <Stack.Screen name="Index" options={{headerShown: false}} component={Index}/>
                    <Stack.Screen name="Login" options={{headerShown: false}} component={Login}/>
                    <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUp}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
   
}


