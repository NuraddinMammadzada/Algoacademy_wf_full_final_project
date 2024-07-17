import React, { useState, useEffect } from 'react';
import './css/Programs.css';

function Programs() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await fetch('/api/todos');
            const data = await response.json();
            setTodos(data);
        } catch (err) {
            console.error('Error fetching todos:', err);
        }
    };

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newTodo.trim() !== '') {
            try {
                const response = await fetch('/api/todos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ text: newTodo })
                });
                const data = await response.json();
                setTodos([...todos, data]);
                setNewTodo('');
            } catch (err) {
                console.error('Error adding todo:', err);
            }
        }
    };

    const completeTodo = async (id) => {
        try {
            const response = await fetch(`/api/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ completed: true })
            });
            const updatedTodo = await response.json();
            setTodos(todos.map(todo => todo._id === id ? updatedTodo : todo));
        } catch (err) {
            console.error('Error completing todo:', err);
        }
    };

    const removeTodo = async (id) => {
        try {
            await fetch(`/api/todos/${id}`, {
                method: 'DELETE'
            });
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (err) {
            console.error('Error removing todo:', err);
        }
    };

    return (
        <div className='Main'>
            <h2>Todo List</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={newTodo}
                    onChange={handleChange}
                    placeholder='Add new todo'
                />
                <button type='submit'>Add</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id} className={todo.completed ? 'completed' : ''}>
                        <span>{todo.text}</span>
                        <div className='buttons'>
                            {!todo.completed && (
                                <button onClick={() => completeTodo(todo._id)}>
                                    Complete
                                </button>
                            )}
                            <button onClick={() => removeTodo(todo._id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Programs;
