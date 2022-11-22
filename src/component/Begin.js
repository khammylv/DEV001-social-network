import { onAuthStateChanged } from 'firebase/auth';
import { auth, createPost, llamarTareas } from '../lib/index.js';

export const Begin = (onNavigate) => {
  const HomeDiv = document.createElement('div');

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
  // boton para cierre sesion
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
      window.location.reload();
    });
  });

  /* formulario del POST enviar */
  const sectionBody = document.createElement('section');
  sectionBody.className = 'sectionBody';
  const formPost = document.createElement('form');
  formPost.className = 'formPost';
  const cajaTexForm = document.createElement('div');
  cajaTexForm.classList = 'cajatextform';
  const textoPost = document.createElement('textarea');
  textoPost.className = 'textoPost';
  const cajabtn = document.createElement('div');
  cajabtn.className = 'cajabtn';
  const botonPost = document.createElement('button');
  botonPost.type = 'submit';
  botonPost.textContent = 'enviar post';
  botonPost.className = 'botonPost';
  sectionBody.appendChild(formPost);
  formPost.appendChild(cajaTexForm);
  cajaTexForm.appendChild(textoPost);
  formPost.appendChild(cajabtn);
  cajabtn.appendChild(botonPost);

  const divPoster = document.createElement('section');
  divPoster.className = 'cajapost';
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user !== null) {
        const displayName = user.displayName;
        // const email = user.email;
        const photoURL = user.photoURL;
        nombreUs.innerText = displayName;
        fotoUs.src = photoURL;
        nombrePerfil.appendChild(nombreUs);
        nombrePerfil.appendChild(fotoUs);

        formPost.addEventListener('submit', (e) => {
          e.preventDefault();
          createPost(textoPost.value, user.uid);
          formPost.reset();
        });

        llamarTareas((querySnapshot) => {
          const contenedorCaja = document.createElement('div');
          contenedorCaja.className = 'contenedorCaja';
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            const postUS = doc.data();
            // esta es la card
            const cardDiv = document.createElement('div');
            cardDiv.className = 'cardCont';
            sectionBody.appendChild(cardDiv);
            const cajaPost = document.createElement('div');
            cajaPost.className = 'cajaPost';
            cardDiv.appendChild(cajaPost);
            const cajaIcon = document.createElement('div');
            cajaIcon.className = 'cajaIcon';
            cardDiv.appendChild(cajaIcon);
            const cajaText = document.createElement('textarea');
            cajaText.innerText = postUS.post;
            cajaText.className = 'cajaText';
            cajaText.disabled = 'true';
            cajaPost.appendChild(cajaText);
            const btnDelete = document.createElement('button');
            btnDelete.className = 'btnDelete';
            const btnEdit = document.createElement('button');
            btnEdit.className = 'btnEdit';
            const liDelete = document.createElement('li');
            liDelete.className = 'bx bx-message-alt-x';
            const liEdit = document.createElement('li');
            liEdit.className = 'bx bx-edit';
            btnEdit.appendChild(liEdit);
            btnDelete.appendChild(liDelete);
            const postFilter = doc.data().id === user.uid;
            console.log(postFilter);
            if (postFilter) {
              cajaIcon.appendChild(btnDelete);
              btnDelete.setAttribute('data-id', doc.id);
              cajaIcon.appendChild(btnEdit);
            }
            contenedorCaja.appendChild(cardDiv);
          });
          divPoster.appendChild(contenedorCaja);
        });
      }
    }
  });

  HomeDiv.appendChild(headerMenu);
  HomeDiv.appendChild(sectionBody);
  HomeDiv.appendChild(divPoster);
  return HomeDiv;
};
