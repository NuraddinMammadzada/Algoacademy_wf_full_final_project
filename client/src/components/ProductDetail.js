import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/ProductDetail.css';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${match.params.id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details', error);
      }
    };
    fetchProduct();
  }, [match.params.id]);

  const handleAddToBasket = () => {
    // Logic to add product to basket
    // Could use localStorage or context for state management
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="product-image"/>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div className="quantity-selector">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
      </div>
      <button onClick={handleAddToBasket} className="add-to-basket-btn">Add to Basket</button>
    </div>
  );
};

export default ProductDetail;
