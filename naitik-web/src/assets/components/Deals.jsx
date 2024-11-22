// Deals.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import roseImage from 'naitik-web/src/assets/images/seasonal-plants.jpg'; // Adjust path as necessary
import tulipImage from 'naitik-web/src/assets/images/seasonal-plants.jpg'; // Adjust path as necessary
import sunflowerImage from 'naitik-web/src/assets/images/seasonal-plants.jpg'; // Adjust path as necessary
import './Deals.css'; // Import your CSS file

const deals = [
    {
        name: 'Rose',
        image: roseImage,
        price: '$15.00',
        description: 'Beautiful red roses, perfect for any occasion.'
    },
    {
        name: 'Tulip',
        image: tulipImage,
        price: '$10.00',
        description: 'Vibrant tulips to brighten your home.'
    },
    {
        name: 'Sunflower',
        image: sunflowerImage,
        price: '$12.00',
        description: 'Cheerful sunflowers that bring sunshine indoors.'
    }
];

const Deals = () => {
    return (
        <div className="deals-container">
            <h2 className="deals-heading">Top Deals for You</h2>
            <div className="deals-cards">
                {deals.map((deal, index) => (
                    <div className="deal-card" key={index}>
                        <img src={deal.image} alt={deal.name} className="card-image" />
                        <h3 className="card-title">{deal.name}</h3>
                        <p className="card-price">{deal.price}</p>
                        <p className="card-description">{deal.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Deals;
