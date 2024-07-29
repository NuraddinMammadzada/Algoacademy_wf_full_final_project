import React, { useState, useEffect } from 'react';
import './css/Cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [showPayment, setShowPayment] = useState(false);

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

    const handleConfirmProducts = () => {
        setShowPayment(true);
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <div className="cart-content">
                <div className="cart-items">
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
                                        <button className="cart-remove-button" onClick={() => handleRemoveItem(item.productId)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                            <div className="cart-total">
                                <h2>Total: ${getTotalPrice()}</h2>
                                <button className="cart-confirm-button" onClick={handleConfirmProducts}>Confirm Products</button>
                            </div>
                        </div>
                    )}
                </div>
                {showPayment && (
                    <div className="cart-summary">
                        <div className="cart-payment-section">
                            <h2>Payment Information</h2>
                            <form className="cart-payment-form">
                                <input type="text" placeholder="Card Number" />
                                <input type="text" placeholder="Name on Card" />
                                <input type="text" placeholder="Expiration Date (MM/YY)" />
                                <input type="text" placeholder="CVV" />
                                <button type="submit">Submit Payment</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
