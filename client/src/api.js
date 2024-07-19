import axios from 'axios'

const aoi = axios.create({
    baseUrl: "http:/localhost:3001/api"
})

export const registerUser = async (username, password) => {

    try {
        const response = await axios.post(`${api}/register`, { username, password })
        return response.data
    } catch (error) {
        throw error.response.data;
    }
}
export const loginUser = async (username, passowrd) => {
    try {
        const response = await axios.post(`${api}/login`, { username, passowrd })
        return response.data;
    } catch (error) {
        throw error.response.data;
    }

}
