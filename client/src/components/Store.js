import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchProducts } from '../api';
import './css/Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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
                    <option value="">All Filters</option>
                    <option value="equipment">Equipment</option>
                    <option value="accessories">Accessories</option>
                    {/* Add other categories as needed */}
                </select>
            </div>
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <Link key={product._id} to={`/product/${product._id}`} className="product-card">
                            <img src={product.imageUrl} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>${product.price.toFixed(2)}</p>
                        </Link>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
};

export default Store;
