// Firebase Configuration
// Project: moments-ase

const firebaseConfig = {
    apiKey: "AIzaSyCquq9b5ab4gBre2lpKm9UXhbRI8FQS7x0",
    authDomain: "moments-ase.firebaseapp.com",
    projectId: "moments-ase",
    storageBucket: "moments-ase.firebasestorage.app",
    messagingSenderId: "251024107631",
    appId: "1:251024107631:web:ccc1f5379f71ffd9a1459a"
};

// VAPID key for web push notifications
const VAPID_KEY = 'BOf2WDUFxR7zfH1GK0hTlmvXZroKoxznHXdknTMESdx2cfdRy8CtdRk13z_HH3bSZw2i_ERdZearT-cYTy-8dGM';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Initialize Messaging (will be set up after service worker registration)
let messaging = null;

// Export for use in app.js
window.firebaseConfig = firebaseConfig;
window.VAPID_KEY = VAPID_KEY;
window.db = db;
