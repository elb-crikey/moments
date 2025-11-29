// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCquq9b5ab4gBre2lpKm9UXhbRI8FQS7x0",
    authDomain: "moments-ase.firebaseapp.com",
    projectId: "moments-ase",
    storageBucket: "moments-ase.firebasestorage.app",
    messagingSenderId: "251024107631",
    appId: "1:251024107631:web:ccc1f5379f71ffd9a1459a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// --- ADD THESE TWO LINES ---
var auth = firebase.auth();
auth.signInAnonymously().catch(function(error) {
    console.error("Anonymous sign-in failed:", error);
});
// ----------------------------

// Initialize Firestore
const db = firebase.firestore();
