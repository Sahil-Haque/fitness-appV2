import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';

export default function BMI() {

    const router = useRouter();

    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('');
    const [bmiResult, setBmiResult] = useState(null);

    {/*Ensures that the user answers all fields of the form */}
    const validateForm = ()=> {
        if(!age || !height || !weight || !gender) {
            alert("Please answer all of the fields");
        }else{
            countBmi();
        }
    }

    const countBmi = ()=> {
        {/*Calculates the bmi of the user after receiving the height and weight, rounds to the nearest 2d.p */}
        const bmi = (parseFloat(weight) / ((parseFloat(height) / 100) **2)).toFixed(2);

        let result = '';
        if(bmi < 18.5){
            result = 'Underweight';
        } else if(bmi >= 18.5 && bmi <= 24.9) {
            result = 'Healthy';
        } else if(bmi >= 25 && bmi <= 29.9) {
            result = 'Overweight';
        } else if(bmi >= 30 && bmi <= 34.9) {
            result = 'Obese';
        }else if(bmi >= 35) {
            result = 'Extremely obese';
        }


        {/* Sets the BMI result */}
        setBmiResult({ bmi, result});

        {/* Resetting form */}
        setAge('');
        setWeight('');
        setHeight('');
        setGender('');

    }

    {/* Form design */}
    const styles = StyleSheet.create({ 
        container: { 
            flex: 1, 
            backgroundColor: '#eef2f3', 
            alignItems: 'center', 
            justifyContent: 'center', 
        }, 
        header: { 
            fontSize: 28, 
            fontWeight: 'bold', 
            color: '#702963', 
            marginBottom: 20, 
        }, 
        form: { 
            backgroundColor: '#fff', 
            borderRadius: 20, 
            padding: 20, 
            width: '90%', 
            elevation: 5, 
        }, 
        inputRow: { 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: 20, 
        }, 
        label: { 
            flex: 1, 
            fontSize: 18, 
            fontWeight: 'bold', 
            marginRight: 10, 
        }, 
        textInput: { 
            flex: 2, 
            height: 40, 
            borderWidth: 1, 
            borderColor: '#ddd', 
            borderRadius: 10, 
            paddingLeft: 10, 
            fontSize: 16, 
        }, 
        genderRow: { 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            marginBottom: 20, 
        }, 
        genderButton: { 
            flex: 1, 
            height: 40, 
            borderRadius: 10, 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: '#C3B1E1', 
            padding: 10, 
            margin: 10, 
        }, 
        selectedGender: { 
            backgroundColor: '#702963', 
        }, 
        genderText: { 
            fontSize: 16, 
            fontWeight: 'bold', 
            color: '#333', 
        }, 
        submitButton: { 
            backgroundColor: '#702963', 
            borderRadius: 10, 
            height: 50, 
            justifyContent: 'center', 
            alignItems: 'center', 
        }, 
        submitButtonText: { 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#fff', 
        }, 
        resultContainer: { 
            marginTop: 20, 
        }, 
        resultLabel: { 
            fontSize: 18, 
            fontWeight: 'bold', 
            marginBottom: 5, 
        }, 
        resultText: { 
            fontSize: 16, 
        }, 
    });
    
    {/* Creating the form */}
    return(
        <View style={styles.container}>
            <View>
            <TouchableOpacity 
                onPress={()=> router.back()}
                className="bg-purple-500 mx-4 absolute flex rounded-[15px]" 
                style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7), position: 'absolute', bottom: 90, left: -200}}
            >
                <Text className="flex justify-center pt-3 pl-1 font-semibold">
                    BACK
                </Text>
                  
            </TouchableOpacity>
            </View>
            <Text style={styles.header}> 
                Check your BMI
            </Text> 
            <View style={styles.form}> 
                <View style={styles.inputRow}> 
                    <Text style={styles.label}> 
                        Age 
                    </Text> 
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Enter your age"
                        onChangeText={setAge} 
                        value={age} 
                        keyboardType="numeric"
                    /> 
                </View> 
                <View style={styles.inputRow}> 
                    <Text style={styles.label}> 
                        Height (cm) 
                    </Text> 
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Enter your height"
                        onChangeText={setHeight} 
                        value={height} 
                        keyboardType="numeric"
                    /> 
                </View> 
                <View style={styles.inputRow}> 
                    <Text style={styles.label}> 
                        Weight (kg) 
                    </Text> 
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Enter your weight"
                        onChangeText={setWeight} 
                        value={weight} 
                        keyboardType="numeric"
                    /> 
                </View> 
                <View style={styles.genderRow}> 
                    <TouchableOpacity 
                        style={[ 
                            styles.genderButton, 
                            gender === 'male' && styles.selectedGender, 
                        ]} 
                        onPress={() => setGender('male')} 
                    > 
                        <Text style={styles.genderText}> 
                            Male 
                        </Text> 
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={[ 
                            styles.genderButton, 
                            gender === 'female' && styles.selectedGender, 
                        ]} 
                        onPress={() => setGender('female')} 
                    > 
                        <Text style={styles.genderText}>Female</Text> 
                    </TouchableOpacity> 
                </View> 
                <TouchableOpacity 
                    style={styles.submitButton} 
                    onPress={validateForm} 
                > 
                    <Text style={styles.submitButtonText}> 
                        Calculate BMI 
                    </Text> 
                </TouchableOpacity> 
                {bmiResult && ( 
                    <View style={styles.resultContainer}> 
                        <Text style={styles.resultLabel}> 
                            BMI: 
                        </Text> 
                        <Text style={styles.resultText}> 
                            {bmiResult.bmi} 
                        </Text> 
                        <Text style={styles.resultLabel}> 
                            Result: 
                        </Text> 
                        <Text style={styles.resultText}> 
                            {bmiResult.result} 
                        </Text> 
                    </View> 
                )} 
            </View>
         </View>
    ); 
}














