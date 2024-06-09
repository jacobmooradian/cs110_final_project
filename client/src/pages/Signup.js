import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleAuth from '../components/GoogleAuth';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleAuthSuccess = (user) => {
    console.log('User signed up:', user);
    navigate('/home');
  };

  const handleAuthFailure = (error) => {
    console.error('Signup failed:', error);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', { email, password, nickname });
      console.log(response.data);
      navigate('/home');
    } catch (error) {
      console.error('Error during signup:', error.response.data);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
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
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname"
          required
        />
        <button type="submit">Signup</button>
      </form>
      <GoogleAuth onAuthSuccess={handleAuthSuccess} onAuthFailure={handleAuthFailure} action="signup" />
    </div>
  );
};

export default Signup;
