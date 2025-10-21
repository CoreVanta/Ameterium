// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";

// إعدادات مشروعك من Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCUJDudVW_1lPh4UnvTY-5GT-att2uBJxs",
  authDomain: "ameterium.firebaseapp.com",
  projectId: "ameterium",
  storageBucket: "ameterium.firebasestorage.app",
  messagingSenderId: "650255548127",
  appId: "1:650255548127:web:c6f973b3a505a7a291736a",
  measurementId: "G-EKY4S15X6J"
};

// التهيئة
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db };
