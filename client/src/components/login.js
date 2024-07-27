import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/LoginSignup.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Added for error handling
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      // Handle successful login
      console.log('Login successful', response.data);
      localStorage.setItem('token', response.data.token); // Store the token in localStorage
      localStorage.setItem('username', email); // Store the username in localStorage
      navigate('/');
    } catch (error) {
      // Set error message to state
      setError(error.response?.data?.error || 'An error occurred during login.');
      console.error('Error logging in', error);
    }
  };

  return (
    <div className="signup">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
