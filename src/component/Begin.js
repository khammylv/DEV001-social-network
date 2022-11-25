/* eslint-disable import/no-unresolved */
import { onAuthStateChanged } from 'firebase/auth';
import {
  auth, createPost, onGetTasks, deleteTasks, updateTask,
} from '../lib/index.js';

export const Begin = (onNavigate) => {
  const HomeDiv = document.createElement('section');
  HomeDiv.className = 'bienvenida';
  // modal Registration
  // el fondo del modal
  const modal = document.createElement('section');
  modal.className = 'modal';
  // el centro del modal
  const modalFlex = document.createElement('div');
  modalFlex.className = 'flex_modal';
  modal.appendChild(modalFlex);
  // cont modal
  const contenidoModal = document.createElement('div');
  contenidoModal.className = 'contenido_modal';
  modalFlex.appendChild(contenidoModal);
  // headermodal
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal_header_begin flex_modal_header';
  contenidoModal.appendChild(modalHeader);
  // logomodal
  const logoModal = document.createElement('div');
  logoModal.className = 'logo_modal';
  modalHeader.appendChild(logoModal);
  const textoHeader = document.createElement('h2');
  textoHeader.innerText = 'Lymusic';
  logoModal.appendChild(textoHeader);
  // botonmodal
  const botonClose = document.createElement('button');
  botonClose.className = 'close';
  botonClose.innerText = 'x';
  modalHeader.appendChild(botonClose);
  // body modal
  const modalBody = document.createElement('div');
  modalBody.className = 'modal_body_begin';
  contenidoModal.appendChild(modalBody);
  const mensajeModal = document.createElement('p');
  mensajeModal.innerText = 'Are you sure you want to delete the publication?';
  mensajeModal.className = 'modal_mensaje_begin';
  const botonModal = document.createElement('button');
  botonModal.className = 'eliminar_begin';
  botonModal.textContent = 'Delete';
  const botonCancelar = document.createElement('button');
  botonCancelar.textContent = 'Cancel';
  botonCancelar.className = 'cancelar_begin';
  modalBody.appendChild(mensajeModal);
  modalBody.appendChild(botonCancelar);
  modalBody.appendChild(botonModal);

  HomeDiv.appendChild(modal);

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
  /* HEADER CON IMAGENES */

  const headerPagina = document.createElement('div');
  headerPagina.className = 'header_pagina';
  headerMenu.appendChild(headerPagina);
  const tituloPag = document.createElement('h1');
  tituloPag.innerText = 'LyMusic';
  const subtitle = document.createElement('h3');
  subtitle.innerText = 'Enjoy the MUSIC';
  headerPagina.appendChild(tituloPag);
  headerPagina.appendChild(subtitle);

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
  const textocc = document.createElement('h3');
  textocc.innerText = 'Share your love for music with our community';
  sectionBody.appendChild(textocc);
  const formPost = document.createElement('form');
  formPost.className = 'formPost';
  const cajaTexForm = document.createElement('div');
  cajaTexForm.classList = 'cajatextform';
  const textoPost = document.createElement('textarea');
  textoPost.className = 'textoPost';
  textoPost.placeholder = 'Write here:';
  const cajabtn = document.createElement('div');
  cajabtn.className = 'cajabtn';
  const botonPost = document.createElement('button');
  botonPost.type = 'submit';
  botonPost.textContent = 'Post';
  botonPost.className = 'botonPost';
  sectionBody.appendChild(formPost);
  formPost.appendChild(cajaTexForm);
  cajaTexForm.appendChild(textoPost);
  formPost.appendChild(cajabtn);
  cajabtn.appendChild(botonPost);
  botonCancelar.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  botonClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
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
          createPost(textoPost.value, user.uid, user.displayName);
          formPost.reset();
        });

        onGetTasks((querySnapshot) => {
          const contenedorCaja = document.createElement('div');
          contenedorCaja.className = 'contenedorCaja';
          querySnapshot.forEach((doc) => {
            const postUS = doc.data();
            // console.log(postUS);
            // esta es la card
            const cardDiv = document.createElement('div');
            cardDiv.className = 'cardCont';
            cardDiv.setAttribute('id', doc.id);
            sectionBody.appendChild(cardDiv);
            const cajaPost = document.createElement('div');
            cajaPost.className = 'cajaPost';
            cardDiv.appendChild(cajaPost);
            const cajaName = document.createElement('div');
            cajaName.className = 'cajaName';
            cajaName.innerText = postUS.name;
            cardDiv.appendChild(cajaName);
            const cajaIcon = document.createElement('div');
            cajaIcon.className = 'cajaIcon';
            cardDiv.appendChild(cajaIcon);
            const cajaText = document.createElement('textarea');
            cajaText.innerText = postUS.post;
            cajaText.className = 'cajaText';
            cajaText.disabled = 'true';
            cajaPost.appendChild(cajaText);
            const cajaEdit = document.createElement('div');
            cajaEdit.className = 'cajaEdit';
            cardDiv.appendChild(cajaEdit);
            const btnSaveText = document.createElement('button');
            btnSaveText.className = 'btnSaveText';
            const imgSave = document.createElement('img');
            imgSave.className = 'btnSaveImage';
            imgSave.src = '../assets/img/send.png';
            btnSaveText.appendChild(imgSave);
            const btnDelete = document.createElement('button');
            btnDelete.className = 'btnDelete';
            const btnEdit = document.createElement('button');
            btnEdit.className = 'btnEdit';
            const liDelete = document.createElement('img');
            liDelete.className = 'delete_img';
            liDelete.src = '../assets/img/delete.png';
            const liEdit = document.createElement('img');
            liEdit.className = 'edit_img';
            liEdit.src = '../assets/img/edit.png';
            btnEdit.appendChild(liEdit);
            btnDelete.appendChild(liDelete);

            const postFilter = doc.data().id === user.uid;
            if (postFilter) {
              cajaIcon.appendChild(btnDelete);
              liDelete.setAttribute('id', doc.id);
              cajaIcon.appendChild(btnEdit);
              liEdit.setAttribute('id', doc.id);
              cajaEdit.appendChild(btnSaveText);
            }
            contenedorCaja.appendChild(cardDiv);
          });
          divPoster.innerHTML = '';
          divPoster.appendChild(contenedorCaja);
          const deletebtn = divPoster.querySelectorAll('.delete_img');
          // console.log(deletebtn);
          deletebtn.forEach((btn) => {
            // console.log(btn);
            btn.addEventListener('mouseup', (e) => {
              modal.style.display = 'block';
              botonModal.addEventListener('click', () => {
                deleteTasks(e.target.id).then(() => {
                  console.log(e.target.id);
                  modal.style.display = 'none';
                  // window.location.reload();
                  // divPoster.innerHTML = '';
                  // onGetTasks(querySnapshot);
                });
              });
            });
          });
          const editbtn = divPoster.querySelectorAll('.edit_img');

          editbtn.forEach((btn) => {
            btn.addEventListener('mouseup', (e) => {
              console.log(e.target.id);
              const id = e.target.id;
              const carta = divPoster.querySelectorAll('.cardCont');
              // eslint-disable-next-line no-plusplus
              for (let i = 0; i < carta.length; i++) {
                const postCard = carta[i].id === e.target.id;
                let cartaInd;
                if (postCard) {
                  cartaInd = carta[i];
                  const tt = cartaInd.querySelector('.cajaText');
                  tt.disabled = false;
                  const btnedit = cartaInd.querySelector('.cajaEdit');
                  btnedit.style.display = 'block';
                  const cajaicon = cartaInd.querySelector('.cajaIcon');
                  cajaicon.style.display = 'none';

                  const btnsend = cartaInd.querySelector('.btnSaveImage');
                  // eslint-disable-next-line no-loop-func
                  btnsend.addEventListener('click', () => {
                    updateTask(id, {
                      post: tt.value,
                    });
                    // }).then(() => {
                    //   window.location.reload();
                    //   // divPoster.innerHTML = '';
                    //   // onGetTasks(querySnapshot);
                    // });
                  });
                }
              }
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
