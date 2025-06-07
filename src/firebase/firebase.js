// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIm9Dzx_ii-zaBOlG8bvv6zjeIwriCvec",
  authDomain: "portfolio-7354b.firebaseapp.com",
  projectId: "portfolio-7354b",
  storageBucket: "portfolio-7354b.firebasestorage.app",
  messagingSenderId: "416643873264",
  appId: "1:416643873264:web:a74f1a54c7c16981014535",
  measurementId: "G-MP5WL4N3HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);