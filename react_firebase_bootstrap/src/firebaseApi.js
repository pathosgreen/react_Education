import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD38YyhQMGdi5pVgJpnoTT2shblCh0PRbE",
    authDomain: "react-firebase-bootstrap-f27f7.firebaseapp.com",
    projectId: "react-firebase-bootstrap-f27f7",
    storageBucket: "react-firebase-bootstrap-f27f7.appspot.com",
    messagingSenderId: "680297953766",
    appId: "1:680297953766:web:1ed8cb6e59ef99b098be27",
    measurementId: "G-28BZ35LKQ2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
