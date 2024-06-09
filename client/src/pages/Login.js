import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleAuth from '../components/GoogleAuth';

const Login = () => {
  const navigate = useNavigate();

  const handleAuthSuccess = (user) => {
    console.log('User logged in:', user);
    navigate('/home'); 
  };

  const handleAuthFailure = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <div>
      <h1>Login</h1>
      <GoogleAuth 
        onAuthSuccess={handleAuthSuccess} 
        onAuthFailure={handleAuthFailure} 
        action="login"
      />
    </div>
  );
};

export default Login;
