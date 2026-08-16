// ============================================
// Styvik — Firebase Configuration
// ============================================

// TODO: Replace with your actual Firebase config from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCZ5LWlswefvEl22fwQ0npyk0liJ-ZYw6s",
  authDomain: "styvik-1a994.firebaseapp.com",
  projectId: "styvik-1a994",
  storageBucket: "styvik-1a994.firebasestorage.app",
  messagingSenderId: "463439293659",
  appId: "1:463439293659:web:7670e3120ba0b92ffbb0fe",
  measurementId: "G-NTXZ5M6FGY"
};

// Initialize Firebase
// Note: We use the compat (v8) version for easier integration with existing multi-page static site
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Export for use in other scripts
window.styvikAuth = auth;
window.styvikDb = db;
window.googleProvider = googleProvider;
