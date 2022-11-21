/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-duplicates, import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line import/no-duplicates
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './Firebase.js';

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
