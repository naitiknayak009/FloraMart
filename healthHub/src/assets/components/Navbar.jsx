import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>HealthHub</h1>
            </div>
            <ul className="navbar-menu">
                <li>
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/help" activeClassName="active">Help</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" activeClassName="active">Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
