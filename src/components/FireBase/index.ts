// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVYQWy9EG_W4EbW9CoAIpf9kaer9dOIHc",
  authDomain: "otp-app-demo-55936.firebaseapp.com",
  projectId: "otp-app-demo-55936",
  storageBucket: "otp-app-demo-55936.appspot.com",
  messagingSenderId: "198870049854",
  appId: "1:198870049854:web:a239e87d538cc935af9d6f",
  databaseURL: "https://otp-app-demo-55936-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
