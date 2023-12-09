// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f684a.firebaseapp.com",
  projectId: "mern-estate-f684a",
  storageBucket: "mern-estate-f684a.appspot.com",
  messagingSenderId: "155968047837",
  appId: "1:155968047837:web:37a126ea9f7594d1fd2934"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
