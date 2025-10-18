import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: `moodly-${process.env.NEXT_PUBLIC_FIREBASE_ID}.firebaseapp.com`,
  projectId: `moodly-${process.env.NEXT_PUBLIC_FIREBASE_ID}`,
  storageBucket: `moodly-${process.env.NEXT_PUBLIC_FIREBASE_ID}.firebasestorage.app`,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const clientAuth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const clientDB = getFirestore(app);