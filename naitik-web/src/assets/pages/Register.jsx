// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'; // Import icons for success and error messages
import './Register.css'; // Import CSS for styling

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status
    const [errorMessage, setErrorMessage] = useState(''); // State to track error messages

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate password confirmation
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        // Create user data object
        const userData = {
            username,
            email,
            password,
        };

        // Store user data in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        console.log('User registered:', userData);

        // Simulate successful registration
        setIsSubmitted(true); // Update submission status
        setErrorMessage(''); // Clear any previous error messages

        // Reset form fields after submission
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        
        // Navigate to home or another page after registration
        // navigate('/');
    };

    return (
        <div className="register-container">
            <div className="left-panel"></div>
            <div className="right-panel">
                <h2 className="welcome-heading">Create an Account</h2>

                {isSubmitted && (
                    <div className="success-message">
                        <FaCheckCircle className="success-icon" />
                        <p>Registered Successfully!</p>
                    </div>
                )}

                {errorMessage && (
                    <div className="error-message">
                        <FaExclamationCircle className="error-icon" />
                        <p>{errorMessage}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="register-form">
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
                        <button type="submit" className="register-button">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
