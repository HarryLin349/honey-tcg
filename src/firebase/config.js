import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0kXDl6LAWmzU9MB5jq1pGc1xgD0iRmPM",
    authDomain: "honey-tcg.firebaseapp.com",
    projectId: "honey-tcg",
    storageBucket: "honey-tcg.firebasestorage.app",
    messagingSenderId: "461550467966",
    appId: "1:461550467966:web:1a25bae11fec136c1fd12f",
    measurementId: "G-1YK9LR7QN3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
