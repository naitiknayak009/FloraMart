// src/Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Health Hub</div>
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#join">Join Us</a></li>
        <li><a href="#home">Settings</a></li>
        <li><a href="#home">Login</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="navbar-search">
        
        <button type="button">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
