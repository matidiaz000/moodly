// Import the functions you need from the SDKs you need
import { initializeApp, cert, getApps } from 'firebase-admin/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

// Service Account Key
import serviceAccount from '../../serviceAccountKey.json';

// Initialize Firebase
if (!getApps().length ) {
  initializeApp({
    credential: cert(serviceAccount as any)
  });
}

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();