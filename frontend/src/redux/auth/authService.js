import axios from "axios";

const API_URL = '/api/users'

const register = async(userData) => {
    const { data } = await axios.post(API_URL, userData)
    if(data){
        localStorage.setItem('user', JSON.stringify(data))
    }
    return data
}

const login = async(userData) => {
    const { data } = await axios.post(API_URL + '/login', userData)
    if(data){
        localStorage.setItem('user', JSON.stringify(data))
    }
    return data
}

const logout = () => localStorage.removeItem('user')

const updateUser = async(userData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const { data } = await axios.put(API_URL + '/profile', userData, config)
    if(data){
        localStorage.setItem('user', JSON.stringify(data))
    }
    console.log(data)
    return data
}




 const authService = {
    register,
    login,
    logout,
    updateUser
}

export default authService