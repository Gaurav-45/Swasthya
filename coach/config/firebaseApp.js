import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDmgdTdo8RYEHI_XNEtmfYFzG7Lk2TXAEY",
  authDomain: "swasthya-26ba6.firebaseapp.com",
  projectId: "swasthya-26ba6",
  storageBucket: "swasthya-26ba6.appspot.com",
  messagingSenderId: "501372213315",
  appId: "1:501372213315:web:3bdd4f89bb2c037ad5dcf6",
  measurementId: "G-LSLKJGF64T"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const auth=firebaseApp.auth();

// export default auth;

export const firebaseApp = initializeApp(firebaseConfig);