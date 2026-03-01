
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgyhoJFjAodm9sUN1I9cf-WP34vhOM1G4",
  authDomain: "mibilet-62bce.firebaseapp.com",
  projectId: "mibilet-62bce",
  storageBucket: "mibilet-62bce.firebasestorage.app",
  messagingSenderId: "852268934252",
  appId: "1:852268934252:web:e5f63e9c34f7db9882e449"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
