import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { initializeApp } from 'firebase/app';

import { respuesta } from './respuesta.js';
// ESTO SE BAJO DE FIREBASE POR MIENTRAS , NO SABEMOS PARA QUE ES.
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxO294UxeqNXv8yLW1xdKhXZEEeWDGvWo',
  authDomain: 'lymusic-1dfa8.firebaseapp.com',
  projectId: 'lymusic-1dfa8',
  storageBucket: 'lymusic-1dfa8.appspot.com',
  messagingSenderId: '419599374276',
  appId: '1:419599374276:web:e8f2ef5528068f61437691',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// GETUTH
const auth = getAuth(app);
export function formularioregistro(name, email, password) {
  createUserWithEmailAndPassword(auth, name, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      console.log('usuariocreado');
      respuesta('true');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      respuesta('false');
    });
}

export function formulariologin(name, email, password) {
  signInWithEmailAndPassword(auth, name, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert('sesion iniciada');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('sesion no iniciada');
    });
}
