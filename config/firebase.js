// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwhhddYUjjOXIf1u-Qu5qd5_R0Wfnrpqk",
  authDomain: "fitness-app-login-1909d.firebaseapp.com",
  projectId: "fitness-app-login-1909d",
  storageBucket: "fitness-app-login-1909d.appspot.com",
  messagingSenderId: "45849891034",
  appId: "1:45849891034:web:9210ec26a15175dd1e95e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});