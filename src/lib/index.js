/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-duplicates, import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line import/no-duplicates
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc,
} from 'firebase/firestore';
import { app, db } from './Firebase.js';
// updateDoc,
// GETUTH
export const auth = getAuth(app);
export function formularioregistro(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

const provider = new GoogleAuthProvider(app);
export function formularioGoogle() {
  return signInWithPopup(auth, provider);
}

export function formulariologin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export const createPost = (postUs, idUs, nameUs) => addDoc(collection(db, 'postMusic'), {
  post: postUs,
  id: idUs,
  name: nameUs,
});

export const getTasks = () => getDocs(collection(db, 'postMusic'));

export const onGetTasks = (callback) => onSnapshot(collection(db, 'postMusic'), callback);
export const deleteTasks = (id) => deleteDoc(doc(db, 'postMusic', id));
export const getTask = (id) => getDoc(doc(db, 'postMusic', id));
export const updateTask = (id, newFields) => updateDoc(doc(db, 'postMusic', id), newFields);
