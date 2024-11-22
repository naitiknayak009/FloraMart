// src/pages/Login.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Optional: Import CSS for styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle authentication logic
        // For demonstration, we will just log the credentials
        console.log('Username:', username);
        console.log('Password:', password);

        // Simulate successful login and navigate to home
        if (username && password) {
            // Here you would handle actual authentication
            navigate('/'); // Redirect to home page after login
        }
    };

    return (
        <div className="login-wrapper">
            <h1>LOG IN</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
