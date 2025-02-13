import { initializeApp, getApps } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only if it hasn't been initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Auth
const auth = getAuth(app);

// Set persistence after auth is initialized
setPersistence(auth, browserLocalPersistence).catch((error) => {
    console.error("Error setting auth persistence:", error);
});

// Initialize Firestore
export const db = getFirestore(app);

export { auth };
export default app;