import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleAuth from '../components/GoogleAuth';

const Signup = () => {
  const navigate = useNavigate();

  const handleAuthSuccess = (user) => {
    console.log('User signed up:', user);
    navigate('/home');  
  };

  const handleAuthFailure = (error) => {
    console.error('Signup failed:', error);
  };

  return (
    <div>
      <h1>Signup</h1>
      <GoogleAuth 
        onAuthSuccess={handleAuthSuccess} 
        onAuthFailure={handleAuthFailure} 
        action="signup"
      />
    </div>
  );
};

export default Signup;
