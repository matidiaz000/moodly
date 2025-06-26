// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAArQvfYw_ZQA6_BNZUkZEdvTHh81ad8oU",
  authDomain: "moodly-fd6af.firebaseapp.com",
  projectId: "moodly-fd6af",
  storageBucket: "moodly-fd6af.firebasestorage.app",
  messagingSenderId: "159062471198",
  appId: "1:159062471198:web:e00ba829e639b4e963b40f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);