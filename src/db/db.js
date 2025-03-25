// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzDL1r308LCG0ZQpRhRSobD_4WLfcz6qo",
  authDomain: "pagepsic.firebaseapp.com",
  projectId: "pagepsic",
  storageBucket: "pagepsic.firebasestorage.app",
  messagingSenderId: "537493062327",
  appId: "1:537493062327:web:159f57373e8f1e862ac332",
  measurementId: "G-GNVLL27P8K",
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Obtenha uma instância do Firestore
const db = getFirestore(app);

export { db };
