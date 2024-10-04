// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHvbKF1pBRIZ9Mkd7YrLd35KZcFjYWlKI",
  authDomain: "notion-clone-4d413.firebaseapp.com",
  projectId: "notion-clone-4d413",
  storageBucket: "notion-clone-4d413.appspot.com",
  messagingSenderId: "606594590556",
  appId: "1:606594590556:web:74ea5c03b0ced44636c399",
  measurementId: "G-DDN0VTTRZC"
};

const app = getApp.length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
export {db};