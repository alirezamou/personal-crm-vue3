/* THIS IS NEW NEW SDK FOR FIREBASE */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPbf1C25kbLS9jUW4CZuPZypVjSa-9mlY",
  authDomain: "personal-crm-3df61.firebaseapp.com",
  projectId: "personal-crm-3df61",
  storageBucket: "personal-crm-3df61.appspot.com",
  messagingSenderId: "93552836069",
  appId: "1:93552836069:web:e2799acef88eed8f84830c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const collections = {
  contacts: collection(db, "contacts"),
};
