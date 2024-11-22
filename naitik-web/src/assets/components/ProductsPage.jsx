// src/pages/ProductsPage.jsx
import React, { useState } from 'react';
import './ProductsPage.css'; // Import CSS for styling
import { FaUserCircle ,FaBell } from 'react-icons/fa'; // User icon

const initialProducts = [
    { id: 1, name: 'Rose', price: 20, description: 'A beautiful red rose.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Tulip', price: 15, description: 'A vibrant tulip.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Sunflower', price: 25, description: 'A bright sunflower.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Daisy', price: 30, description: 'A lovely white daisy.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Lily', price: 10, description: 'A fragrant lily.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Orchid', price: 40, description: 'An exotic orchid.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Carnation', price: 18, description: 'A colorful carnation.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Peony', price: 35, description: 'A lush peony flower.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Chrysanthemum', price: 22, description: 'A cheerful chrysanthemum.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Geranium', price: 12, description: 'A charming geranium.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Geranium', price: 12, description: 'A charming geranium.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Geranium', price: 12, description: 'A charming geranium.', imageUrl: 'https://via.placeholder.com/150' },

];

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = initialProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="products-page">
            <nav className="navbar2">
                <div className="user-icon">
                    <FaUserCircle size={30} />
                    
                </div>
                <FaBell size={30} className='bell'/>
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="search-bar" 
                />
            </nav>
            <h1>Varieties</h1>
            <div className="product-cards">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
