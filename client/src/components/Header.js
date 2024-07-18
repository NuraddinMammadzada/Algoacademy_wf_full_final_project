import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="head container">
            <div className="head1">
                <div className="workout">WORKOUT</div>
            </div>
            <div className="head2">
                <Link to="/">WORKOUTS</Link>
                <Link to="/programs">PROGRAMS</Link>
                <Link to="/video">VIDEO LESSONS</Link>
                <Link to="/community">COMMUNITY</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/login"><i className="fa-solid fa-user"></i> LOG-IN</Link>
            </div>
            <div className="head3" onClick={toggleDropdown}>
                <i className='fa-solid fa-bars'></i>
            </div>
            {isDropdownOpen && (
                <div className="dropdown">
                    <Link to="/" onClick={toggleDropdown}>WORKOUTS</Link>
                    <Link to="/programs" onClick={toggleDropdown}>PROGRAMS</Link>
                    <Link to="/video" onClick={toggleDropdown}>VIDEO LESSONS</Link>
                    <Link to="/community" onClick={toggleDropdown}>COMMUNITY</Link>
                    <Link to="/about" onClick={toggleDropdown}>ABOUT</Link>
                    <Link to="/login" onClick={toggleDropdown}><i className="fa-solid fa-user"></i> LOG-IN</Link>
                </div>
            )}
        </header>
    );
}

export default Header;
