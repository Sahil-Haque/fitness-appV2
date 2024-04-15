import { Axios } from "axios";
import { rapidApiKey } from "../constants";

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params)=> {
    try{
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'

            }
        };

        const response = await axios.request(options);
        return response.data;
    }catch(err){
        console.log('error: ', err.message);
    }
}

{/* 
    $bodyPart is a dynamic variable that changes depending on the body part that was called. 
    Async allows certain functions to operate asynchronously, guarantees a promise
    It allows me to use the await command which pauses the execution until a promise is returned (resolved or rejected)
    Allows the rest of the code to work without having to wait for a promise
*/}

export const fetchExerciseByBodyPart = async (bodyPart)=> {
    let data = await apiCall(baseUrl +`/exercises/bodyPart/${bodyPart}` );
    return data;
}