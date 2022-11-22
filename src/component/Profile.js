import { updateProfile, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/index.js';
import { Rutas } from '../lib/rutas.js';
// updateProfile,
export const Profile = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'divPadrePerfil';
  const form = document.createElement('form');
  HomeDiv.appendChild(form);
  const nombre = document.createElement('input');
  nombre.type = 'text';
  nombre.placeholder = 'Name';
  const labelNombre = document.createElement('label');
  const buttonSubmit = document.createElement('button');
  buttonSubmit.type = 'submit';
  buttonSubmit.textContent = 'enviar';
  const imgPerfil = document.createElement('input');
  imgPerfil.type = 'text';
  // let nombreCambio = '';
  //  let fotoCambio = '';
  form.appendChild(nombre);
  form.appendChild(labelNombre);
  form.appendChild(imgPerfil);
  form.appendChild(buttonSubmit);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(nombre.value);
    console.log(imgPerfil.value);
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user !== null) {
        console.log(user);
        console.log('dentro de profile');
      }
      console.log(user);
      nombre.value = user.displayName;
      imgPerfil.value = user.photoURL;
    }
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(nombre.value);
    // console.log(imgPerfil.value);
    updateProfile(auth.currentUser, {
      displayName: nombre.value, photoURL: imgPerfil.value,
    }).then(() => {
      console.log(auth.currentUser.email);
      onNavigate(Rutas(auth.currentUser.email));
      window.location.reload();

      // Profile updated!
      // ...
    }).catch((error) => {
      alert(error.message);
    });
  });

  return HomeDiv;
};
