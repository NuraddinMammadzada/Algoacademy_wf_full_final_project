import React, { useState, useEffect } from 'react';
import './css/Basket.css';

const Basket = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    // Retrieve basket from localStorage or context
    const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(storedBasket);
  }, []);

  const calculateTotalPrice = () => {
    return basket.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="basket">
      <h1>Your Basket</h1>
      <ul>
        {basket.map((item) => (
          <li key={item._id} className="basket-item">
            <p>{item.name} (x{item.quantity}) - ${item.price * item.quantity}</p>
          </li>
        ))}
      </ul>
      <h2>Total Price: ${calculateTotalPrice().toFixed(2)}</h2>
    </div>
  );
};

export default Basket;
