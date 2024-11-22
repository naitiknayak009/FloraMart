// HeroSection.jsx
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./HeroSection.css"; // Import the CSS file
import Lottie from "lottie-react"
import anime from "./Animation - 1732251717662.json"
const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <div className="hero-container">
            
            <nav className="navbar">
                <h1 className="logo">FLORAMART.</h1>
                <div className="nav-links">
                    <div className="linki">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About Us</Link>
                        <Link to="/register" className="nav-link">Become a Seller</Link>
                    </div>
                    <button onClick={() => navigate('/login')} className="login-button">Log In</button>
                    <button  onClick={() => navigate('/register')} className="signup-button">Sign Up</button>
                </div>
            </nav>
            {/* <div className="anima">
            <Lottie animationData={anime}></Lottie>
            </div> */}
            <div className="hero-content">
                <h2 className="hero-title">Platform For</h2>
                <p className="hero-subtitle">
                    Selling and Buying Fresh <span className="hero-title">Flowers</span>
                </p>
                <button className="shop-button">Shop Now</button>
                <button className="Register1-button" onClick={() => navigate('/register')}>Register</button>
            </div>
        </div>
    );
};

export default HeroSection;
