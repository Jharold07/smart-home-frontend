import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCqoRKfm-p44LXHPn4s3yuSDZp4P7BI4x4",
    authDomain: "smart-home-ce6de.firebaseapp.com",
    projectId: "smart-home-ce6de",
    storageBucket: "smart-home-ce6de.firebasestorage.app",
    messagingSenderId: "68302793639",
    appId: "1:68302793639:web:3831b818e1ef10efcd2482",
    measurementId: "G-RPLWN67H3H"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén la base de datos en tiempo real
const database = getDatabase(app);

export { database };
