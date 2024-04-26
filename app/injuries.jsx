import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 
import React from 'react';
import { useRouter } from 'expo-router';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';
import { StatusBar } from 'expo-status-bar';


export default function Injuries(){
    
    const router = useRouter();

    {/* CSS */}
    const styles = StyleSheet.create({
        container: {
            padding: 20,
            marginTop: 40,
          },
          backButton: {
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 1,
          },
          header: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
            justifyContent: 'center',
            left: 130,
          },
          section: {
            marginBottom: 20,
          },
          subheading: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
          },
          paragraph: {
            marginBottom: 10,
          },
          bullet: {
            marginLeft: 20,
            marginBottom: 5,
          },
    })


    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
            
            {/* Back button */}
            <TouchableOpacity 
                onPress={()=> router.back()} 
                style={styles.backButton}
                className="bg-purple-500 mx-4 flex rounded-[15px]" 

            >
                <Text className="flex justify-center pt-3 pl-1 font-semibold">
                    BACK
                </Text>
            </TouchableOpacity>

            {/* Content */}
            <Text style={styles.header}>
                Injuries
            </Text>
            <View style={styles.section}>
                <Text style={styles.subheading}>
                    This section contains a list of potential injuries, the causes, and prevention methods.
                </Text>
            </View>

            {/* Rotator cuff */}
            <View style={styles.section}>
                <Text style={styles.subheading}>
                    Shoulder injury
                </Text>
                <Text style={styles.paragraph}>
                    The rotator cuff is a group of muscles and tendons that surround the shoulder joint, 
                    keeping the head of the upper arm bone firmly within the shallow socket of the shoulder.
                    A rotator cuff injury can cause a dull ache in the shoulder that worsens at night.
                </Text>
                <Text style={styles.paragraph}>
                    Causes:
                </Text>
                <Text style={styles.bullet}>
                    - Injury from terrible form - ego lifting can put excess strain on your rotator cuffs, causing them to tear.
                </Text>
                <Text style={styles.bullet}>
                    - Age - rotator cuff tears can also occur due to aging through the degeneration of tissues.
                </Text>
                <Text style={styles.paragraph}>
                    Prevention:
                </Text>
                <Text style={styles.bullet}>
                    - Exercise Your Shoulders (And Warm Up Beforehand) Along with keeping the rest of your body in shape, 
                      regular exercise can strengthen your rotator cuff. 
                </Text>
                <Text style={styles.bullet}>
                    - Practice Good Posture.
                </Text>
                <Text style={styles.bullet}>
                    - Avoid Repetitive Overhead Motions.
                </Text>
            </View>

            {/* Muscle strain */}
            <View style={styles.section}>
                <Text style={styles.subheading}>
                    Muscle strain
                </Text>
                <Text style={styles.paragraph}>
                    A strain is when a muscle is stretched too much and part of it tears. It is also called a pulled muscle.
                    A strain is a painful injury. It can be caused by an accident, overusing a muscle, or using a muscle in the wrong way.
                </Text>
                <Text style={styles.paragraph}>
                    Causes:
                </Text>
                <Text style={styles.bullet}>
                    - Too much physical activity or effort
                </Text>
                <Text style={styles.bullet}>
                    - Improperly warming up before a physical activity
                </Text>
                <Text style={styles.bullet}>
                    - Poor flexibility
                </Text>
                <Text style={styles.paragraph}>
                    Prevention
                </Text>
                <Text style={styles.bullet}>
                    - Warm-up properly before exercise and sports
                </Text>
                <Text style={styles.bullet}>
                    - Keep your muscles strong and flexible
                </Text>
            </View>
        </ScrollView>

    )
}