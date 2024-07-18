import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faRunning, faHeart } from '@fortawesome/free-solid-svg-icons'; // Add icons as needed
import './css/Programs.css';

const workoutTypes = [
    { id: 'body-workout', name: 'Body Workout', icon: faDumbbell },
    { id: 'bitsups-workout', name: 'Bitsups Workout', icon: faRunning },
    { id: 'loose-weight-workout', name: 'Loose Weight Workout', icon: faHeart }
];

const Programs = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ name: '', description: '', duration: 0, type: '' });
    const [showModal, setShowModal] = useState(false);
    const [activeTimer, setActiveTimer] = useState(null);

    useEffect(() => {
        if (activeTimer !== null) {
            const interval = setInterval(() => {
                setTasks(tasks => tasks.map(task => {
                    if (task.id === activeTimer) {
                        const now = new Date();
                        const duration = Math.floor((now - task.startTime) / 1000);
                        return { ...task, duration };
                    }
                    return task;
                }));
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [activeTimer]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.name && newTask.description && newTask.duration && newTask.type) {
            setTasks([
                ...tasks,
                { id: tasks.length + 1, ...newTask, started: false, startTime: null, endTime: null, duration: 0 }
            ]);
            setNewTask({ name: '', description: '', duration: 0, type: '' });
            setShowModal(false);
        }
    };

    const handleStartTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, started: true, startTime: new Date(), endTime: null } : task
        ));
        setActiveTimer(id);
    };

    const handleFinishTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, started: false, endTime: new Date() } : task
        ));
        setActiveTimer(null);
    };

    const handleRemoveTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="programs-page">
            <h1>Programs</h1>
            <button className="open-modal-button" onClick={() => setShowModal(true)}>Add New Task</button>
            <div className="task-list">
                {tasks.map((task) => (
                    <div key={task.id} className="task-card">
                        <h3>{task.name}</h3>
                        <p>{task.description}</p>
                        <div className="workout-icon">
                            <FontAwesomeIcon icon={workoutTypes.find(type => type.id === task.type)?.icon} />
                        </div>
                        <p>Duration: {task.duration}s</p>
                        {task.started ? (
                            <div className="task-actions">
                                <button onClick={() => handleFinishTask(task.id)}>Finish</button>
                                <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                                <p>Started at: {task.startTime?.toLocaleTimeString()}</p>
                                <p>Ended at: {task.endTime ? task.endTime.toLocaleTimeString() : 'In progress'}</p>
                                <p>Duration: {Math.floor(task.duration / 60)}:{task.duration % 60}s</p>
                            </div>
                        ) : (
                            <div className="task-actions">
                                <button onClick={() => handleStartTask(task.id)}>Start</button>
                                <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-modal" onClick={() => setShowModal(false)}>&times;</span>
                        <h2>Add New Task</h2>
                        <form onSubmit={handleAddTask}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Task Name"
                                value={newTask.name}
                                onChange={handleInputChange}
                                required
                            />
                            <textarea
                                name="description"
                                placeholder="Task Description"
                                value={newTask.description}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                            <input
                                type="number"
                                name="duration"
                                placeholder="Duration (seconds)"
                                value={newTask.duration}
                                onChange={handleInputChange}
                                required
                            />
                            <select name="type" value={newTask.type} onChange={handleInputChange} required>
                                <option value="">Select Workout Type</option>
                                {workoutTypes.map(type => (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                ))}
                            </select>
                            <button type="submit">Add Task</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Programs;
