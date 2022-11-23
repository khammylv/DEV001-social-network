import { onAuthStateChanged } from 'firebase/auth';
import { auth, createPost, llamarTareas} from '../lib/index.js';

export const Begin = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'bienvenida';

  const headerMenu = document.createElement('header');
  headerMenu.className = 'header_menu';
  const contenedorMenu = document.createElement('div');
  contenedorMenu.className = 'contenedorMenu';
  headerMenu.appendChild(contenedorMenu);
  const headerPerfil = document.createElement('div');
  headerPerfil.className = 'headerPerfil';
  contenedorMenu.appendChild(headerPerfil);
  const nombrePerfil = document.createElement('div');
  nombrePerfil.className = 'nombrePerfil';
  const iconoMenu = document.createElement('label');
  iconoMenu.className = 'iconoMenu';
  headerPerfil.appendChild(iconoMenu);
  const checkMenu = document.createElement('input');
  checkMenu.type = 'checkbox';
  checkMenu.className = 'checkmenu';
  iconoMenu.appendChild(checkMenu);
  const imgMenu = document.createElement('span');
  imgMenu.className = 'imgMenu checkmenuImg';
  iconoMenu.appendChild(imgMenu);
  headerPerfil.appendChild(nombrePerfil);
  const nombreUs = document.createElement('h3');
  const fotoUs = document.createElement('img');
  fotoUs.className = 'foto';
  /* MENU LATERAL */
  const asideMenu = document.createElement('nav');
  headerMenu.appendChild(asideMenu);
  asideMenu.className = 'asideMenu';
  const listasMenu = document.createElement('ul');
  listasMenu.className = 'listasMenu';
  asideMenu.appendChild(listasMenu);
  const liInicio = document.createElement('li');
  const aInicio = document.createElement('a');
  aInicio.innerText = 'Inicio';
  liInicio.appendChild(aInicio);
  listasMenu.appendChild(liInicio);
  const liContacto = document.createElement('li');
  const aContacto = document.createElement('a');
  aContacto.innerText = 'Contacto';
  liContacto.appendChild(aContacto);
  listasMenu.appendChild(liContacto);
  const liHome = document.createElement('li');
  const aHome = document.createElement('a');
  liHome.appendChild(aHome);
  aHome.innerText = 'profile';
  listasMenu.appendChild(liHome);
  const salir = document.createElement('li');
  const aSalir = document.createElement('a');
  const iconoSalir = document.createElement('img');
  iconoSalir.src = '../assets/img/cerrar-sesion.png';
  iconoSalir.className = 'iconoSalir';
  salir.appendChild(aSalir);
  aSalir.appendChild(iconoSalir);
  listasMenu.appendChild(salir);
  imgMenu.addEventListener('click', () => {
    if (asideMenu.style.display === 'block') {
      asideMenu.style.display = 'none';
    } else {
      asideMenu.style.display = 'block';
    }
  });
  salir.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      onNavigate('/');
      window.location.reload();
    });
  });
  liHome.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/profile');
  });
  const sectionBody = document.createElement('section');
  sectionBody.className = 'sectionBody';
  const formPost = document.createElement('form');
  formPost.className = 'formPost';
  const cajaTexForm = document.createElement('div');
  cajaTexForm.classList = 'cajatextform';
  const textoPost = document.createElement('textarea');
  textoPost.className = 'textoPost';
  textoPost.placeholder = 'Type your Post';
  const cajabtn = document.createElement('div');
  cajabtn.className = 'cajabtn';
  const botonPost = document.createElement('button');
  botonPost.type = 'submit';
  botonPost.textContent = 'Enviar Post';
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
        formPost.addEventListener('submit', async (e) => {
          e.preventDefault();
          createPost(textoPost.value, user.uid);
          formPost.reset();
        });

        llamarTareas((querySnapshot) => {
          const contenedorCaja = document.createElement('div');
          contenedorCaja.className = 'contenedorCaja';
          querySnapshot.forEach((doc) => {
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

            const btnLike = document.createElement('button');
            btnLike.className = 'btnLike';
            btnLike.type = 'button';
            const liLike = document.createElement('img');
            liLike.className = 'liLike';
            liLike.src = '../assets/img/me-gusta.png';
            btnLike.appendChild(liLike);

            const btnCom = document.createElement('button');
            btnCom.className = 'btnCom';
            btnCom.type = 'button';
            const liCom = document.createElement('img');
            liCom.className = 'liCom';
            liCom.src = '../assets/img/comment.png';
            btnCom.appendChild(liCom);

            cajaIcon.appendChild(btnLike);
            cajaIcon.appendChild(btnCom);
            btnEdit.appendChild(liEdit);
            btnDelete.appendChild(liDelete);

            const postFilter = doc.data().id === user.uid;
            if (postFilter) {
              cajaIcon.appendChild(btnDelete);
              btnDelete.setAttribute('data-id', doc.id);
              cajaIcon.appendChild(btnEdit);
            }
            contenedorCaja.appendChild(cardDiv);
          });

          divPoster.appendChild(contenedorCaja);
          const deletebtn = divPoster.querySelectorAll('.btnDelete');
          console.log(deletebtn);
          deletebtn.forEach((btn) => {
            console.log(btn);
            btn.addEventListener('click', () => {
              console.log('dentro del boton');
            });
          });
        });
      }
    }
  });

  HomeDiv.appendChild(headerMenu);
  HomeDiv.appendChild(sectionBody);
  HomeDiv.appendChild(divPoster);

  return HomeDiv;
};
