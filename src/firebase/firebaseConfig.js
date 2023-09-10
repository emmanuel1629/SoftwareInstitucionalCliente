// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage';
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9XZuHUIWL5g8-R7vNcDQNyg0SGkjObOs",
  authDomain: "software-institucional.firebaseapp.com",
  projectId: "software-institucional",
  storageBucket: "software-institucional.appspot.com",
  messagingSenderId: "8775358090",
  appId: "1:8775358090:web:495b450702d98f64177f73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);

