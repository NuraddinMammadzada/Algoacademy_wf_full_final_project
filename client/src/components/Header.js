// src/Header.js
import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';
import './css/Header.css';


function Header() {
    return (
<BrowserRouter >
        <header className="head container">
            <div className="head1">
                <div className="workout">WORKOUT</div>
            </div>
            <div className="head2">
                <Link to="/">WORKOUTS</Link>
                <Link to="/programs">PROGRAMS</Link>
                <Link to="#">HEALTHY LIVING</Link>
                <Link to="#">COMMUNITY</Link>
                <Link to="#">ABOUT</Link>
                <Link to="#">STORE</Link>
            </div>
            <div className="head3"><i className='fa-solid fa-bars'></i></div>
        </header>
        </BrowserRouter> 
    );
}

export default Header;
