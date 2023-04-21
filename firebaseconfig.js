import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyApsdNUsJClXOjpevzTzqS0aQSO7nLFMyY",
    authDomain: "chattterrrr.firebaseapp.com",
    projectId: "chattterrrr",
    storageBucket: "chattterrrr.appspot.com",
    messagingSenderId: "427106342009",
    appId: "1:427106342009:web:fa549b169235551090f0a8"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();