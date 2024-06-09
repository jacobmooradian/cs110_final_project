import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleAuth from '../components/GoogleAuth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthSuccess = (user) => {
    console.log('User logged in:', user);
    navigate('/home');
  };

  const handleAuthFailure = (error) => {
    console.error('Login failed:', error);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
      console.log(response.data);
      navigate('/home');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <GoogleAuth onAuthSuccess={handleAuthSuccess} onAuthFailure={handleAuthFailure} action="login" />
    </div>
  );
};

export default Login;
