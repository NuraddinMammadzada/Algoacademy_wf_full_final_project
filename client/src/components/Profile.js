import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../api'; // Import the API function to fetch user data
import './css/Profile.css';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getUserData = async () => {
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const response = await fetchUserData(token); // Pass token to fetch user data
                if (response.status === 200) {
                    setUser(response.data);
                } else {
                    console.error('Failed to fetch user data');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        getUserData();
    }, [navigate, token]);

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('profilePic');
        navigate('/login');
    };

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>Failed to load profile data.</div>;

    return (
        <div className="profile">
            <h1>Profile</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
