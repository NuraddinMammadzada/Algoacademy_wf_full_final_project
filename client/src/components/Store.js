import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import './css/Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                setError('Error loading products');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    useEffect(() => {
        const filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = category ? product.category === category : true;
            return matchesSearch && matchesCategory;
        });
        setFilteredProducts(filtered);
    }, [searchTerm, category, products]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="store">
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    <option value="fitness">Fitness</option>
                    <option value="nutrition">Nutrition</option>
                    <option value="accessories">Accessories</option>
                    {/* Add other categories as needed */}
                </select>
            </div>
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product._id} className="product-card">
                            <img src={product.imageUrl} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>${product.price.toFixed(2)}</p>
                            <button>Add to Cart</button>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
};

export default Store;
