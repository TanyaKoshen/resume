
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCEz4lFsYo6tbSbvOMHZd1CCs33SNSD-Vs",
    authDomain: "resume-align.firebaseapp.com",
    projectId: "resume-align",
    storageBucket: "resume-align.appspot.com",
    messagingSenderId: "740997461886",
    appId: "1:740997461886:web:a39e7e170223e1dde9a52f",
    measurementId: "G-YXW0JH2E9Q"
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
// };


// Initialize Firebase
const connectFirebase = initializeApp(firebaseConfig);

const db = getFirestore(connectFirebase);

export default db;
