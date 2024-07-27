import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000/api" // Ensure this matches your backend server URL
});

export const fetchProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const registerUser = async (username, password) => {
    try {
        const response = await api.post('/register', { username, password });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('An error occurred');
    }
};

export const loginUser = async (username, password) => {
    try {
        const response = await api.post('/login', { username, password });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('An error occurred');
    }
};
