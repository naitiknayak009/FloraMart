// src/pages/AboutUs.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaLeaf, FaRecycle } from 'react-icons/fa'; // Importing icons
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h2 className="about-us-heading">About Our Business Model</h2>
            <div className="about-us-content">
                <FaLeaf className="about-us-icon" />
                <p className="about-us-description">
                    At floraMart, we believe in connecting our customers with the best plants sourced from local vendors. 
                    Our business model focuses on supporting local growers and ensuring that you receive the freshest 
                    plants directly from your community. By fostering these relationships, we not only provide high-quality 
                    products but also contribute to the local economy.
                </p>
            </div>
            <h3 className="sustainability-heading">Sustainability for the Future</h3>
            <div className="sustainability-content">
                <FaRecycle className="sustainability-icon" />
                <p className="sustainability-description">
                    We are committed to sustainability in every aspect of our operations. From sourcing plants locally 
                    to minimizing our carbon footprint during delivery, we strive to make environmentally conscious 
                    choices. Our packaging is eco-friendly, and we continuously seek ways to reduce waste and promote 
                    sustainable practices. Together, we can cultivate a greener future.
                </p>
            </div>
            <h3 className="sustainability-heading">Quality Products for Every Home</h3>
            <div className="sustainability-content">
                <FaRecycle className="sustainability-icon" />
                <p className="sustainability-description">
                In addition to our beautiful plants, we offer high-quality manure for sale on our website. This eco-friendly product is perfect for nurturing your garden and ensuring your plants thrive. Our manure is made 
                from recycled materials, showcasing our commitment to sustainability and responsible sourcing.
                </p>
            </div>
            <h3 className="sustainability-heading">Join Us in Cultivating a Greener Tomorrow !</h3>
            <div className="sustainability-content">
                <FaRecycle className="sustainability-icon" />
                <p className="sustainability-description">
                At Flora Mart, we believe that every plant sold is a step towards a more sustainable world. Join us in our journey to promote local agriculture, reduce waste, and cultivate a greener tomorrow. Explore our range of plants and eco-friendly products today, and be part of a community that values sustainability and quality. Feel free to adjust any sections or wording to better fit your brand&apos;s voice and message! This description emphasizes your commitment to local sourcing, sustainability, 
                and community involvement, which can resonate well with environmentally conscious customers.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
