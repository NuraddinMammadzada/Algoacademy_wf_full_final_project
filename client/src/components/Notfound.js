//not found page
import React from 'react';
import './css/Notfound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <a href="/" className="back-home">Go back home</a>
    </div>
  );
};

export default NotFound;
