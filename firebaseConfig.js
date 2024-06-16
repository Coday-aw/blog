import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDNlsQBVMFdt4YIq1uSo8he2z0r-nCaso",
  authDomain: "first-project-bc372.firebaseapp.com",
  projectId: "first-project-bc372",
  storageBucket: "first-project-bc372.appspot.com",
  messagingSenderId: "186017380306",
  appId: "1:186017380306:web:0ad1b22d343a1a5e447a0b",
  measurementId: "G-YL7E4DWTNP",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
