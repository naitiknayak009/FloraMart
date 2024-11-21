// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>HealthHub</h2>
                <p>Your health is our priority.</p>
                <ul className="footer-links">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} HealthHub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
