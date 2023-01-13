import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKyrDT1_USphyrkHBhfhNjinhpOVD56_w",
  authDomain: "fire-contact-project-1ec96.firebaseapp.com",
  databaseURL: "https://fire-contact-project-1ec96-default-rtdb.firebaseio.com",
  projectId: "fire-contact-project-1ec96",
  storageBucket: "fire-contact-project-1ec96.appspot.com",
  messagingSenderId: "964421526913",
  appId: "1:964421526913:web:9bfeb3b01a96154407f480"
};


const firebase = initializeApp(firebaseConfig);
export default firebase;