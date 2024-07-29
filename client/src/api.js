import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000/api" // Ensure this matches your backend server URL
});


export const login = async (credentials) => {
    try {
        const response = await axios.post('/api/login', credentials);
        return response.data;
    } catch (error) {
        throw new Error('Error logging in');
    }
};
export const fetchProductDetail = async (productId) => {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
};

export const fetchCartItems = async (userId) => {
    const response = await axios.get(`${API_URL}/users/${userId}/cart`);
    return response.data;
};

export const addToCart = async (userId, productId, quantity) => {
    const response = await axios.post(`${API_URL}/users/${userId}/cart`, { productId, quantity });
    return response.data;
};

export const removeFromCart = async (userId, productId) => {
    const response = await axios.delete(`${API_URL}/users/${userId}/cart/${productId}`);
    return response.data;
};
export const updateCartItemQuantity = async (productId, quantity) => {
    const response = await axios.put(`${API_URL}/cart/${productId}`, { quantity });
    return response.data;
};

export const removeCartItem = async (productId) => {
    await axios.delete(`${API_URL}/cart/${productId}`);
};

export const fetchUserData = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/user`, {
            headers: {
                'Authorization': `Bearer ${token}` // Send the token in the Authorization header
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

// Other API functions like registerUser and loginUser


export const registerUser = async (username, password) => {
    try {
        const response = await api.post('/register', { username, password });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('An error occurred');
    }
};
export const fetchProducts = async () => {
    const response = await axios.get('http://localhost:5000/api/products');
    return response.data;
};

export const fetchProductById = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/products/${id}`);
    return response.data;
};
export const loginUser = async (username, password) => {
    try {
        const response = await api.post('/login', { username, password });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('An error occurred');
    }
};

// Fetch a product by ID
