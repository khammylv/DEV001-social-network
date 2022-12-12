/* eslint-disable import/no-unresolved */
import {
  onGetTasks, viewUser,
} from '../lib/index.js';
import { EditePost } from './Edite.js';
import { Delete } from './DeletePost.js';
import { likePost } from './like.js';

export const Post = () => {
  const poster = document.createElement('div');
  const divPoster = document.createElement('section');
  divPoster.className = 'cajapost';
  viewUser((user) => {
    if (user !== null) {
      poster.style.display = 'block';
      onGetTasks((querySnapshot) => {
        const contenedorCaja = document.createElement('div');
        contenedorCaja.className = 'contenedorCaja';
        querySnapshot.forEach((doc) => {
          console.log(doc);
          const postUS = doc.data();
          const cardDiv = document.createElement('div');
          cardDiv.className = 'cardCont';
          cardDiv.setAttribute('id', doc.id);
          const cajaPost = document.createElement('div');
          cajaPost.className = 'cajaPost';
          cardDiv.appendChild(cajaPost);
          const cajaName = document.createElement('div');
          cajaName.className = 'cajaName';
          cajaName.innerText = postUS.name;
          cardDiv.appendChild(cajaName);

          // caja Like
          const cajaLike = document.createElement('div');
          cajaLike.className = 'cajaLike';
          cajaName.appendChild(cajaLike);
          const btnLike = document.createElement('button');
          btnLike.type = 'submit';
          btnLike.className = 'btnLike';
          cajaLike.appendChild(btnLike);
          const botonLike = document.createElement('img');
          botonLike.className = 'botonLike';
          botonLike.src = '../assets/img/heart.png';
          btnLike.appendChild(botonLike);
          const contador = document.createElement('input');
          contador.type = 'number';
          contador.value = '0';
          contador.className = 'contador';
          cajaLike.appendChild(contador);

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
            // para like
            // btnLike.setAttribute('id', doc.id);

            cajaEdit.appendChild(btnSaveText);
          }
          contenedorCaja.appendChild(cardDiv);
        });
        divPoster.innerHTML = '';
        divPoster.appendChild(contenedorCaja);
        EditePost();
        likePost(user.uid);
        poster.appendChild(Delete());
      });
    } else {
      poster.style.display = 'none';
    }
  });

  // poster.appendChild(Delete());
  poster.appendChild(divPoster);
  return poster;
};
