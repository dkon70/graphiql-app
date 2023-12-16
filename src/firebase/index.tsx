import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseKeys from '../../firebase.config';

const firebaseConfig = {
  apiKey: firebaseKeys.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: firebaseKeys.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: firebaseKeys.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: firebaseKeys.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: firebaseKeys.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: firebaseKeys.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: firebaseKeys.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
