/* eslint-disable import/no-unresolved */
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/index.js';

export const Begin = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  console.log(window.location.pathname);
  HomeDiv.className = 'bienvenida';

  const form0 = document.createElement('div');
  const divForm0 = document.createElement('div');
  HomeDiv.appendChild(form0);
  form0.appendChild(divForm0);
  const divBoton = document.createElement('div');
  divBoton.className = 'botonAtras';
  divForm0.appendChild(divBoton);
  divForm0.className = 'botonAtras';
  const buttonHome3 = document.createElement('button');
  buttonHome3.textContent = '«';
  buttonHome3.className = 'btn_atras';
  divBoton.appendChild(buttonHome3);
  buttonHome3.addEventListener('click', () => onNavigate('/login'));
  // boton para cierre sesionr
  const divBotoncerrar = document.createElement('div');
  divBotoncerrar.className = 'btn_logout';
  divForm0.appendChild(divBotoncerrar);
  const buttonlogout = document.createElement('button');
  buttonlogout.textContent = 'Logout';
  buttonlogout.className = 'btn_cerrar';
  divForm0.appendChild(buttonlogout);
  buttonlogout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      onNavigate('/');
    });
  });
  divForm0.className = 'caja0';

  const form2 = document.createElement('div');
  const divForm2 = document.createElement('div');
  HomeDiv.appendChild(form2);
  form2.appendChild(divForm2);

  const imgProfile = document.createElement('img');
  imgProfile.className = 'imgProfile';
  divForm2.appendChild(imgProfile);
  if (window.location.pathname !== '/Begin') {
    console.log('cambio');
  }

  const textodos = document.createElement('h2');
  textodos.className = 'Nombrebienvenida';
  textodos.innerHTML = '';
  divForm2.appendChild(textodos);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      // console.log(uid);

      //  textodos.innerHTML = user.email;
      // const user = auth.currentUser;
      if (user !== null) {
        textodos.innerHTML = '';
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        // const emailVerified = user.emailVerified;
        textodos.innerHTML = `${displayName} ${email} `;
        imgProfile.src = photoURL;
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        //  const uid = user.uid;
      }
    }
  });
  const updateData = document.createElement('h2');
  updateData.textContent = 'Update your information';
  updateData.classList = 'update';
  divForm2.appendChild(updateData);
  updateData.addEventListener('click', () => onNavigate('/profile'));
  // HomeDiv.appendChild(imgProfile);
  // HomeDiv.appendChild(textodos);
  divForm2.className = 'cajas2';

  const play = document.createElement('img');
  play.classList = 'play';
  play.src = '../assets/img/jugar2.png';
  play.alt = 'imagen play';

  HomeDiv.appendChild(play);

  const form = document.createElement('div');
  const divForm = document.createElement('div');
  HomeDiv.appendChild(form);
  form.appendChild(divForm);
  const opcion1 = document.createElement('p');
  opcion1.textContent = 'Podcasts';
  divForm.appendChild(opcion1);
  opcion1.classList = 'podcasts';
  const opcion2 = document.createElement('p');
  opcion2.textContent = 'New Releases';
  divForm.appendChild(opcion2);
  opcion2.classList = 'new';
  const opcion3 = document.createElement('p');
  opcion3.textContent = 'Popular Play List';
  divForm.appendChild(opcion3);
  opcion3.classList = 'populares';
  const opcion4 = document.createElement('p');
  opcion4.textContent = 'Artists';
  divForm.appendChild(opcion4);
  opcion4.classList = 'artistas';
  divForm.className = 'cajas';
  // const textoCuerpo = document.createElement('p');
  // textoCuerpo.textContent = 'Desconéctate del mundo y conéctate con la música';
  // textoCuerpo.classList = 'parrafo_publicacion';
  // HomeDiv.appendChild(textoCuerpo);

  return HomeDiv;
};
