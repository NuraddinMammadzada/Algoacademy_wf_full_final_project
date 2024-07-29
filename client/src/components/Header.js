import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Header.css';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const username = localStorage.getItem('username'); // Получаем имя пользователя из localStorage
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };

    return (
        <header className="head container">
            <div className="head1">
                <div className="workout">WORKOUT</div>
            </div>
            <div className="head2">
                <Link to="/">WORKOUTS</Link>
                <Link to="/ai">AI</Link>
                <Link to="/store">STORE</Link>
                <Link to="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <Link to="/about">ABOUT</Link>

                {username ? (
                    <>
                        <span onClick={handleProfileClick} className="username">{username}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login"><i className="fa-solid fa-user"></i> LOG-IN</Link>
                )}
            </div>
            <div className="head3" onClick={toggleDropdown}>
                <i className='fa-solid fa-bars'></i>
            </div>
            {isDropdownOpen && (
                <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
                    <Link to="/" onClick={toggleDropdown}>WORKOUTS</Link>
                    <Link to="/ai" onClick={toggleDropdown}>AI</Link>
                    <Link to="/store" onClick={toggleDropdown}>STORE</Link>
                    <Link to="/about" onClick={toggleDropdown}>ABOUT</Link>
                    {username ? (
                        <>
                            <span onClick={() => { handleProfileClick(); toggleDropdown(); }} className="username">{username}</span>
                            <button onClick={() => { handleLogout(); toggleDropdown(); }}>Logout</button>
                        </>
                    ) : (
                        <Link to="/login" onClick={toggleDropdown}><i className="fa-solid fa-user"></i> LOG-IN</Link>
                    )}
                </div>
            )}
        </header>
    );
}

export default Header;
