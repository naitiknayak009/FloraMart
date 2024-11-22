// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons
import './Login.css'; // Import CSS for styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);

        // Simulate successful login and navigate to home
        if (username && password) {
            // Here you would handle actual authentication
            navigate('/'); // Redirect to home page after login
        }
    };

    return (
        <div className="login-container">
            <div className="left-panel"></div>
            <div className="right-panel">
                <h2 className="welcome-heading">Welcome Back</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <FaUser className="icon" />
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <FaLock className="icon" />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
