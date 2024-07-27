import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Header.css';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    };

    const isLoggedIn = !!localStorage.getItem('token');
    const username = localStorage.getItem('username');

    return (
        <header className="head container">
            <div className="head1">
                <div className="workout">WORKOUT</div>
            </div>
            <div className="head2">
                <Link to="/">WORKOUTS</Link>
                <Link to="/programs">PROGRAMS</Link>
                <Link to="/video">VIDEO LESSONS</Link>
                <Link to="/store">STORE</Link>
                <Link to="/basket">
                    <i className="fa-solid fa-cart-shopping">Cart</i>
                </Link>
                <Link to="/about">ABOUT</Link>

                {isLoggedIn ? (
                    <>
                        <span className="username">Welcome, {username}</span>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    </>
                ) : (
                    <Link to="/login"><i className="fa-solid fa-user"></i> LOG-IN</Link>
                )}
            </div>
            <div className="head3" onClick={toggleDropdown}>
                <i className='fa-solid fa-bars'></i>
            </div>
            {isDropdownOpen && (
                <div className="dropdown">
                    <Link to="/" onClick={toggleDropdown}>WORKOUTS</Link>
                    <Link to="/programs" onClick={toggleDropdown}>PROGRAMS</Link>
                    <Link to="/video" onClick={toggleDropdown}>VIDEO LESSONS</Link>
                    <Link to="/store" onClick={toggleDropdown}>STORE</Link>
                    <Link to="/about" onClick={toggleDropdown}>ABOUT</Link>
                    {isLoggedIn ? (
                        <>
                            <span className="dropdown-username">Welcome, {username}</span>
                            <button onClick={() => { handleLogout(); toggleDropdown(); }} className="dropdown-logout-button">Logout</button>
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
