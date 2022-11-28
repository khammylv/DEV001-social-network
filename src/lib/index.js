// funciones puras//
// eslint-disable-next-line import/no-duplicates, import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line import/no-duplicates
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc,
} from 'firebase/firestore';
import { app, db } from './Firebase.js';
// updateDoc,
// GETUTH
export const auth = getAuth(app);
// eslint-disable-next-line max-len
export const formularioregistro = (email, password) => createUserWithEmailAndPassword(auth, email, password);
// eslint-disable-next-line max-len
export const formulariologin = (email, password) => signInWithEmailAndPassword(auth, email, password);

const provider = new GoogleAuthProvider(app);
export const formularioGoogle = () => signInWithPopup(auth, provider);

export const createPost = (postUs, idUs, nameUs) => addDoc(collection(db, 'postMusic'), {
  post: postUs,
  id: idUs,
  name: nameUs,
});
export const onGetTasks = (callback) => onSnapshot(collection(db, 'postMusic'), callback);
export const deleteTasks = (id) => deleteDoc(doc(db, 'postMusic', id));
export const updateTask = (id, newFields) => updateDoc(doc(db, 'postMusic', id), newFields);
export const signOut = () => auth.signOut();
