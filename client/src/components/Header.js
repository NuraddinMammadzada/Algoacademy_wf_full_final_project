import React, { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './css/Header.css';


function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    
    return (
        <BrowserRouter>
            <header className="head container">
                <div className="head1">
                    <div className="workout">WORKOUT</div>
                </div>
                <div className="head2">
                    <Link to="/">WORKOUTS</Link>
                    <Link to="/programs">PROGRAMS</Link>
                    <Link to="/healtyliving">HEALTHY LIVING</Link>
                    <Link to="ourcommunity">COMMUNITY</Link>
                    <Link to="/abutus">ABUT</Link>
                    <Link to="/login"><i className="fa-solid fa-user"></i>SIGN-UP</Link>
                </div>
                <div className="head3" onClick={toggleDropdown}>
                    <i className='fa-solid fa-bars'></i>
                </div>
                {isDropdownOpen && (
                    <div className="dropdown">
                        <Link to="/" onClick={toggleDropdown}>WORKOUTS</Link>
                        <Link to="/programs" onClick={toggleDropdown}>PROGRAMS</Link>
                        <Link to="/healtyliving" onClick={toggleDropdown}>HEALTHY LIVING</Link>
                        <Link to="/ourcommunity" onClick={toggleDropdown}>COMMUNITY</Link>
                        <Link to="/abutus" onClick={toggleDropdown}>ABUT</Link>
                        <Link to="/signup" onClick={toggleDropdown}><i className="fa-solid fa-user"></i> SIGN-UP</Link>
                    </div>
                )}
            </header>
        </BrowserRouter>
    );
}

export default Header;
