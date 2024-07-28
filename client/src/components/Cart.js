import React, { useState, useEffect } from 'react';
import './css/Cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartItems);
    }, []);

    const handleRemoveItem = (productId) => {
        const updatedCart = cart.filter(item => item.productId !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.productId} className="cart-item">
                            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h2>{item.name}</h2>
                                <p>Price: ${item.price.toFixed(2)}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => handleRemoveItem(item.productId)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <h2>Total: ${getTotalPrice()}</h2>
                </div>
            )}
        </div>
    );
};

export default Cart;
