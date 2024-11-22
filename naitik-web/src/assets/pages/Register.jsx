// src/pages/Register.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Register.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa'; // Import tick mark icon

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would typically handle registration logic
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        // Simulate successful registration
        setIsSubmitted(true); // Update submission status

        // Reset form fields after submission
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate('/');
    };

    return (
        <div className="register-wrapper">
            <h1>Create an Account</h1>
            {isSubmitted && (
                <div className="success-message">
                    <FaCheckCircle className="success-icon" />
                    <p>Registered Successfully!</p>
                </div>
            )}
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
                    <p>Email</p>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
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
                <label>
                    <p>Confirm Password</p>
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </label>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
