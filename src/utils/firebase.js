// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsBjCoUTz26TtJ2sMjEV8OreEYrVWDZAI",
  authDomain: "netflixgpt-354a1.firebaseapp.com",
  projectId: "netflixgpt-354a1",
  storageBucket: "netflixgpt-354a1.appspot.com",
  messagingSenderId: "187913569446",
  appId: "1:187913569446:web:f2f4e8172aae730768a067",
  measurementId: "G-88T49YKDYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
