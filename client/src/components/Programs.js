import React, { useState } from 'react';
import './css/Programs.css';

const Programs = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [selectedLogo, setSelectedLogo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() && selectedLogo) {
            setTodos([...todos, { text: newTodo.trim(), logo: selectedLogo, finished: false }]);
            setNewTodo('');
            setSelectedLogo('');
        }
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const finishTodo = (index) => {
        setTodos(todos.map((todo, i) => i === index ? { ...todo, finished: !todo.finished } : todo));
    };

    return (
        <div className="container">
            {/* <p className="paragraph">Keep track of your workout routines</p> */}
            <div className="todoContainer">
                <h2 className="subHeader">Workout List</h2>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="input"
                />
                <select value={selectedLogo} onChange={(e) => setSelectedLogo(e.target.value)} className="select">
                    <option value="" disabled>Select logo</option>
                    <option value=""><i class="fa-solid fa-dumbbell"></i></option>
                    <option value="logo2.png">Logo 2</option>
                    <option value="logo3.png">Logo 3</option>
                </select>
                <button onClick={addTodo} className="button">Add</button>
                <ul className="list">
                    {todos.map((todo, index) => (
                        <li key={index} className={`listItem ${todo.finished ? 'finished' : ''}`}>
                            <img src={todo.logo} alt="logo" className="logo" />
                            {todo.text}
                            <button onClick={() => finishTodo(index)} className="finishButton">
                                {todo.finished ? 'Undo' : 'Finish'}
                            </button>
                            <button onClick={() => removeTodo(index)} className="deleteButton">X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Programs;
