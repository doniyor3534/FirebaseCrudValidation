// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCvngkqWOhKYr99H2636L6XEnl9QxuJuUA",
//   authDomain: "my-contact-4cc2e.firebaseapp.com",
//   projectId: "my-contact-4cc2e",
//   storageBucket: "my-contact-4cc2e.appspot.com",
//   messagingSenderId: "217779033141",
//   appId: "1:217779033141:web:e00aa2cd7e7011ff72cd7c"
// };
 const firebaseConfig = {
  apiKey: "AIzaSyCYKf0hCAaJnClbo-Vpe8qaqZgp4KfHIK4",
  authDomain: "contact-1578a.firebaseapp.com",
  projectId: "contact-1578a",
  storageBucket: "contact-1578a.appspot.com",
  messagingSenderId: "670271399848",
  appId: "1:670271399848:web:43eacd3954f838d8ed5f9d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)