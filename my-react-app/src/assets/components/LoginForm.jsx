// src/LoginForm.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; // Correct import statement
import './LoginForm.css';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(isLogin ? 'Logging in' : 'Registering', { email, password });
  };

  return (
    <div className="login-form-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className=''>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className=''>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='cen'>
          {isLogin ? 'Login' : 'Register'}
        </Button>
      </Form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Register' : 'Login'}
        </Button>
      </p>
    </div>
  );
};

export default LoginForm;
