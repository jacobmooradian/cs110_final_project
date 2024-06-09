import React from 'react';
import { auth } from '../firebase/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const GoogleAuth = ({ onAuthSuccess, onAuthFailure }) => {
  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      onAuthSuccess(user);
    } catch (error) {
      console.error(error);
      onAuthFailure(error);
    }
  };

  return (
    <button onClick={handleGoogleAuth}>Continue with Google</button>
  );
};

export default GoogleAuth;
