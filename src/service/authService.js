import axios from 'axios';

const API_URL="http://localhost:8081/api";

export const registerUser=async(userData)=>{
    try {
        const response=await axios.post(API_URL+"/register",userData);
        return response;
    } catch (error) {
        throw error;
    }
};

export const login=async(loginData)=>{
    try {
        const response=await axios.post(API_URL+"/login",loginData);
        return response;
    } catch (error) {
        throw error;
    }
};