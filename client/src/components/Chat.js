// components/Chat.js
import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:4001');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);

  const handleSendMessage = () => {
    socket.emit('send_message', newMessage);
    setNewMessage('');
  };

  return (
    <div>
      <h2>Live Chat</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;