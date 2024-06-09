import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCMAUK89e4MsWbXD73G3xiaRKna3SdWhq8",
    authDomain: "cs110-final-project-56be0.firebaseapp.com",
    projectId: "cs110-final-project-56be0",
    storageBucket: "cs110-final-project-56be0.appspot.com",
    messagingSenderId: "499824640351",
    appId: "1:499824640351:web:1fb2dd837651867deab6ea",
    measurementId: "G-HCB098R71N"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
