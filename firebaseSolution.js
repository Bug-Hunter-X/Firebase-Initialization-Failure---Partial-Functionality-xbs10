import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  // measurementId: "YOUR_MEASUREMENT_ID", //Analytics is optional
};

const app = initializeApp(firebaseConfig);

try {
  //const analytics = getAnalytics(app); //Optional, comment out if not using
  const auth = getAuth();
  console.log('Firebase initialized successfully, Authentication service available:', auth);
} catch (error) {
  console.error('Error initializing Firebase:', error);
}
