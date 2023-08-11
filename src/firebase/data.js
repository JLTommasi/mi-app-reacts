// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzEfhNVYqKjFaJuhzcdtcaxtRIKB78TDM",
  authDomain: "river-efa60.firebaseapp.com",
  projectId: "river-efa60",
  storageBucket: "river-efa60.appspot.com",
  messagingSenderId: "671429643738",
  appId: "1:671429643738:web:aa22345b1d93c50c8dc4e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);