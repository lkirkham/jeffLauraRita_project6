import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBj8WOqkr29BuQI2RCwVoOPHAtiZ1iuEc0",
    authDomain: "plonk-26f1b.firebaseapp.com",
    databaseURL: "https://plonk-26f1b.firebaseio.com",
    projectId: "plonk-26f1b",
    storageBucket: "plonk-26f1b.appspot.com",
    messagingSenderId: "929491411337"
};
firebase.initializeApp(config);



export default firebase;