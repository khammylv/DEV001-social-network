// funciones puras//
// eslint-disable-next-line import/no-duplicates, import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line import/no-duplicates
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc,
} from 'firebase/firestore';
import { app, db } from './Firebase.js';

// GETUTH
export const auth = getAuth(app);
export function formularioregistro(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      return user;
    })
    .catch((error) => {
      const errorMessage = error.code;
      console.log(errorMessage);
      return errorMessage;
    });
}

const provider = new GoogleAuthProvider(app);
export function formularioGoogle() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      return user;
    })
    .catch((error) => {
      const errorMessage = error.code;
      console.log(errorMessage);
      return errorMessage;
    });
}

export function formulariologin(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      return user;
    })
    .catch((error) => {
      const errorMessage = error.code;

      return errorMessage;
    });
}

export const createPost = (postUs, idUs) => addDoc(collection(db, 'postMusic'), {
  post: postUs,
  id: idUs,
}).then((respuesta) => {
  console.log('Document written with ID: ', respuesta);
  return respuesta;
}).catch((err) => {
  console.error('Error adding document: ', err.message);
  return err.code;
});

//obtener tares (getTask)
export const getTasks = () => getDocs(collection(db, 'postMusic'));

export const onGetTasks = (callback) => onSnapshot(collection(db, 'postMusic'), callback);
export const deleteTasks = (id) => deleteDoc(doc(db, 'postMusic', id));
export const getTask = (id) => getDoc(doc(db, 'postUser', id));
export const updateTask = (id, newFields) => updateDoc(doc(db, 'postUser', id), newFields);
