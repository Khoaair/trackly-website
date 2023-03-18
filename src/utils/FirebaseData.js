// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDjLY7512FIjDELwdpOOh-ASUAPztGP8cU',
  authDomain: 'tms1-79e2b.firebaseapp.com',
  databaseURL:
    'https://tms1-79e2b-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'tms1-79e2b',
  storageBucket: 'tms1-79e2b.appspot.com',
  messagingSenderId: '490072221204',
  appId: '1:490072221204:web:56a95456c1aa7b5657e901',
  measurementId: 'G-NN3FS0Q6N7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
