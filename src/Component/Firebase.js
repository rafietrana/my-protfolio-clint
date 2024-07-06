// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClmehmiG5C7G88V2YLyDTqvrJFliBTUWk",
  authDomain: "my-protfolio-f124e.firebaseapp.com",
  projectId: "my-protfolio-f124e",
  storageBucket: "my-protfolio-f124e.appspot.com",
  messagingSenderId: "149847665125",
  appId: "1:149847665125:web:16661cccf653a70bab670c",
};

// Initialize Firebase this is very importent
const app = initializeApp(firebaseConfig);
export default app;
