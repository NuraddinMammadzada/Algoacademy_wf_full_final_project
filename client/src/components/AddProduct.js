import React, { useState } from 'react';
import axios from 'axios';
import './css/AddProduct.css';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('apparel');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', { name, description, price, category, imageUrl });
      alert('Product added successfully!');
      setName('');
      setDescription('');
      setPrice('');
      setCategory('apparel');
      setImageUrl('');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      {error && <p className="error-message">Error: {error.message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="apparel">Apparel</option>
          <option value="equipment">Equipment</option>
          <option value="accessories">Accessories</option>
          <option value="supplements">Supplements</option>
        </select>
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
