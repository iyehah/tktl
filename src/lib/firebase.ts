import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCqwH-0fGqMXnhslZI9q1vS4LkfN1cG1d4",
  authDomain: "vote-d5897.firebaseapp.com",
  projectId: "vote-d5897",
  storageBucket: "vote-d5897.firebasestorage.app",
  messagingSenderId: "151414041130",
  appId: "1:151414041130:web:357c58f3306ad2e2737153",
  measurementId: "G-6NJ015YXV3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics (conditionally for supported environments)
export let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}
