// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
 import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB8PdZVxLNLrDt_IW-hp7f7Xw9oeT8j1gU',
  authDomain: 'words-db-12a0a.firebaseapp.com',
  projectId: 'words-db-12a0a',
  storageBucket: 'words-db-12a0a.appspot.com',
  messagingSenderId: '894603970651',
  appId: '1:894603970651:web:8a7a1724041e7644f1577e',
  measurementId: 'G-D7FY4D8YBJ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 