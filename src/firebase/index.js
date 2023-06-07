// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYgCh9xi0iCYdHWGK7xW0JHbaW9wXnjjw",
  authDomain: "fir-tasklist-183fc.firebaseapp.com",
  projectId: "fir-tasklist-183fc",
  storageBucket: "fir-tasklist-183fc.appspot.com",
  messagingSenderId: "698210145320",
  appId: "1:698210145320:web:f0c95ab71d9dc72abd511d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize fireStore
export  const db = getFirestore()