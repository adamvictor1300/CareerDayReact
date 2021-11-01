import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
//import { seedDatabase } from '../seed';


const config = {
  apiKey: "AIzaSyCy1ycWcB2vA4rGX2Kb1UDBT2e1RUThEBA",
  authDomain: "career-day-f2274.firebaseapp.com",
  projectId: "career-day-f2274",
  storageBucket: "career-day-f2274.appspot.com",
  messagingSenderId: "997214064240",
  appId: "1:997214064240:web:1da695eacad8f055bceeb5"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where you call the seed file (only once)
//seedDatabase(firebase);

export { firebase, FieldValue }; 