import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD97ePv4xGJA2tw_rUzqSQnOgNJzdlo138",
  authDomain: "tiktok---jornada-1be60.firebaseapp.com",
  projectId: "tiktok---jornada-1be60",
  storageBucket: "tiktok---jornada-1be60.appspot.com",
  messagingSenderId: "67970528806",
  appId: "1:67970528806:web:c08e31c719a855df9118e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;