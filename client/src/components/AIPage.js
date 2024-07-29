import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './css/AIPage.css';

const AIPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [promptResponses, setPromptResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const genAI = new GoogleGenerativeAI('AIzaSyDqldRnqIMyLxIKsu2s7V_WwqfHl1p2jzA');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getResponseForGivenPrompt = async () => {
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent(inputValue);
      const response = result.response;
      const text = response.text();
      console.log(text);
      setPromptResponses([...promptResponses, { text, type: 'ai' }]);
      setLoading(false);
    } catch (error) {
      console.log('Something Went Wrong');
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setPromptResponses([...promptResponses, { text: inputValue, type: 'user' }]);
      setTimeout(() => {
        getResponseForGivenPrompt();
      }, 500);
      setInputValue('');
    }
  };

  return (
    <div className="ai-page">
      <h1 className="ai-page-title">AI Page</h1>
      <div className="ai-page-responses-container">
        {promptResponses.map((promptResponse, index) => (
          <div key={index} className={`ai-page-response-card ${promptResponse.type === 'user' ? 'ai-page-user-message' : 'ai-page-ai-message'}`}>
            {promptResponse.type === 'ai' && <div className="ai-page-nickname">AI:</div>}
            {promptResponse.type === 'user' && <div className="ai-page-nickname">You:</div>}
            <div className="ai-page-response-text">{promptResponse.text}</div>
          </div>
        ))}
        {loading && <p className="ai-page-loading-text">Loading...</p>}
      </div>
      <form className="ai-page-input-container" onSubmit={handleSubmit}>
        <div className="ai-page-input-send-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your prompt"
            className="ai-page-input-field"
          />
          <button type="submit" className="ai-page-send-button">
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIPage;