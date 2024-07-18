import React, { useState } from 'react';
import './css/Community.css';

const teachers = [
    { id: 1, name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', tasks: ['Task 1', 'Task 2'], videos: ['Video 1', 'Video 2'] },
    { id: 2, name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', tasks: ['Task 3', 'Task 4'], videos: ['Video 3', 'Video 4'] },
    { id: 3, name: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', tasks: ['Task 5', 'Task 6'], videos: ['Video 5', 'Video 6'] },
    // Add more teachers as needed
];

const Community = () => {
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    const handleTeacherClick = (teacher) => {
        setSelectedTeacher(teacher);
    };

    return (
        <div className="community-page">
            <h1>Community</h1>
            <div className="teacher-list">
                {teachers.map(teacher => (
                    <div
                        key={teacher.id}
                        className="teacher-card"
                        onClick={() => handleTeacherClick(teacher)}
                    >
                        <img src={teacher.avatar} alt={`${teacher.name}'s avatar`} className="teacher-avatar" />
                        <div className="teacher-name">{teacher.name}</div>
                    </div>
                ))}
            </div>
            {selectedTeacher && (
                <div className="teacher-details">
                    <button className="close-button" onClick={() => setSelectedTeacher(null)}>X</button>
                    <h2>{selectedTeacher.name}</h2>
                    <h3>Tasks:</h3>
                    <ul>
                        {selectedTeacher.tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                    <h3>Video Lessons:</h3>
                    <ul>
                        {selectedTeacher.videos.map((video, index) => (
                            <li key={index}>{video}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Community;
