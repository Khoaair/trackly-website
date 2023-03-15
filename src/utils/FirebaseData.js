import firebase from 'firebase/app';
import 'firebase/database';

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

firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

export default dbRef;
