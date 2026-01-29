import axios from 'axios';
import { API_BASE_URL } from '../util/constants';

const API_URL = API_BASE_URL;

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