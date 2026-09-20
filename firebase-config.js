// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbsTmEvPquvEy7gwDr2-fm0voZfgDlbvI",
  authDomain: "YOUR_AUTH_DOMAIN_HERE",
  databaseURL: "https://silentvipbuxx-default-rtdb.firebaseio.com",
  projectId: "nobinpanel-21435",
  storageBucket: "silentvipbuxx.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
  appId: "1:166334417341:android:32ebb9e398fb3e195dead4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };