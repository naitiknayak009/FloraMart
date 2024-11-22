// AboutUs.jsx
import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h2 className="about-us-heading">About Our Business Model</h2>
            <p className="about-us-description">
                At floraMart, we believe in connecting our customers with the best plants sourced from local vendors. 
                Our business model focuses on supporting local growers and ensuring that you receive the freshest 
                plants directly from your community. By fostering these relationships, we not only provide high-quality 
                products but also contribute to the local economy.
            </p>
            <h3 className="sustainability-heading">Sustainability for the Future</h3>
            <p className="sustainability-description">
                We are committed to sustainability in every aspect of our operations. From sourcing plants locally 
                to minimizing our carbon footprint during delivery, we strive to make environmentally conscious 
                choices. Our packaging is eco-friendly, and we continuously seek ways to reduce waste and promote 
                sustainable practices. Together, we can cultivate a greener future.
            </p>
        </div>
    );
};

export default AboutUs;
