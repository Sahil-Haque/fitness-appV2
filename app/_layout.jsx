import { View, Text } from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

export default function _layout(){
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