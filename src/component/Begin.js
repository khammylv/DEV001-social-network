/* eslint-disable import/no-unresolved */
import {
  signOut, viewUser,
} from '../lib/index.js';
import { Post } from './Post.js';
import { Share } from './PostShare.js';

export const Begin = (onNavigate) => {
  const HomeDiv = document.createElement('section');
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
    signOut().then(() => {
      onNavigate('/');
      window.location.reload();
    });
  });
  liHome.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/profile');
    // window.location.reload();
  });
  viewUser((user) => {
    if (user !== null) {
      headerMenu.style.display = 'block';
      const displayName = user.displayName;
      const photoURL = user.photoURL;
      nombreUs.innerText = displayName;
      fotoUs.src = photoURL;
      nombrePerfil.appendChild(nombreUs);
      nombrePerfil.appendChild(fotoUs);
    } else {
      headerMenu.style.display = 'none';
    }
  });

  HomeDiv.appendChild(headerMenu);
  HomeDiv.appendChild(Share());
  HomeDiv.appendChild(Post());
  return HomeDiv;
};
