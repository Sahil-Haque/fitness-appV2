import { View, Text, LogBox } from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

export default function _layout(){
    LogBox.ignoreLogs(["Warning: Failed prop type"])
    return(
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            {/* Allows the exercises screen to open as a full page*/}
            <Stack.Screen name="exercises" options={{
                presentation: 'fullScreenModal'
            }} />
        </Stack>
    )
}