import React from 'react';
import './css/Abut.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="hero">
                <h1>About Us</h1>
                <p>Discover more about our dedicated team and vibrant community</p>
            </div>
            <div className="content">
                <div className="stats">
                    <div className="stat-item">
                        <img
                            src="https://media.istockphoto.com/id/1359558763/photo/portrait-of-a-muscular-young-man-writing-notes-on-a-clipboard-while-working-in-a-gym.jpg?s=612x612&w=0&k=20&c=uT6wvz0chhixvjop2GnTh_uTMmiO4X05rho1T3qOzOo="
                            alt="Teachers"
                            className="stat-image"
                        />
                        <h3>Teachers</h3>
                        <p>10 Experienced Trainers</p>
                    </div>
                    <div className="stat-item">
                        <img
                            src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1667417372/AccreditedSchoolsOnline.org/GettyImages-1366052585/GettyImages-1366052585.jpg?_i=AA"
                            alt="Students"
                            className="stat-image"
                        />
                        <h3>Students</h3>
                        <p>500+ Active Members</p>
                    </div>
                </div>
                <div className="description">
                    <p>
                        Welcome to our workout community! Our mission is to provide top-notch training and fitness resources to help you achieve your goals.
                        With a team of dedicated trainers and a vibrant community of students, we strive to make fitness accessible and enjoyable for everyone.
                    </p>
                    <p>
                        Join us today and be part of a supportive and motivating environment where you can push your limits and achieve new heights!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
