import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../api';
import './css/ProductDetail.css';

const ProductDetail = ({ addToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const data = await fetchProductById(id);
                setProduct(data);
            } catch (error) {
                setError('Error loading product');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Product not found</p>;

    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
                <div className="quantity-control">
                    <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
                <Link to="/store" className="back-button">Back</Link>
            </div>
        </div>
    );
};

export default ProductDetail;
