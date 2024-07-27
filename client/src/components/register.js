import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/LoginSignup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState(null); // Added for error handling
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', { username: email, password, gender }); // Update endpoint if needed
      console.log('Signup successful', response.data);
      navigate('/login');
    } catch (error) {
      // Set error message to state
      setError(error.response?.data?.error || 'An error occurred during signup.');
      console.error('Error signing up', error);
    }
  };

  return (
    <div className="signup">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
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
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button type="submit">Sign Up</button>
        </form>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
