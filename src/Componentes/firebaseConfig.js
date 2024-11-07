// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiRzBrXsqt7f9CqFV1dKwMNTUUAOvGU3A",
    authDomain: "landing-page-3ca9e.firebaseapp.com",
    projectId: "landing-page-3ca9e",
    storageBucket: "landing-page-3ca9e.firebasestorage.app",
    messagingSenderId: "1021437690393",
    appId: "1:1021437690393:web:a516cf55f0bcbedf5ea088",
    measurementId: "G-SCJBQZF42V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
