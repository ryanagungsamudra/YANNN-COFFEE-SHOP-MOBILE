import axios from "axios";
import { API_URL } from "@env"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const postLogin = async (body) => {
    return await axios.post(`${API_URL}/api/auth/login`, body)
}

export const postRegist = async (body) => {
    // return await axios.post(`${API_URL}/api/auth/register`, body)
    return await axios({
        url: `${API_URL}/api/auth/register`,
        method: "POST",
        data: body,
    })
}

export const getUserById = async (id) => {
    return await axios({
        url: `${API_URL}/api/users/${id}`,
        method: "GET",
    })
}

export const getUserData = async (setState) => {
    try {
        const value = await AsyncStorage.getItem('@userData')
        if (value !== null) {
            setState(JSON.parse(value))
        }
    } catch (e) {
        // error reading value
    }
}

export const patchUserProfile = async (body, id) => {
    axios.patch(`${API_URL}/api/users/${id}`, body, {
        method: 'PATCH',
        headers: {
            'Content-type': 'multipart/form-data',
        }
    })
}