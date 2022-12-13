/* eslint-disable import/no-unresolved */
import {
  onGetTasks, viewUser,
} from '../lib/index.js';
import { EditePost, namePost } from './Edite.js';
import { Delete } from './DeletePost.js';
import { likePost } from './Like.js';

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
          btnLike.className = 'btnLike';
          btnLike.innerText = '❤';
          btnLike.setAttribute('id', doc.id);
          cajaLike.appendChild(btnLike);
          const contador = document.createElement('p');
          const numLikes = postUS.like.length - 1;
          contador.innerText = numLikes;
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
          imgSave.src = '../assets/img/plane.png';
          btnSaveText.appendChild(imgSave);
          const btnDelete = document.createElement('button');
          btnDelete.className = 'btnDelete';
          const btnEdit = document.createElement('button');
          btnEdit.className = 'btnEdit';

          const notas = document.createElement('img');
          notas.className = 'notas';
          notas.src = '../assets/img/music-notes.png';
          cardDiv.appendChild(notas);

          const liDelete = document.createElement('img');
          liDelete.className = 'delete_img';
          liDelete.src = '../assets/img/bin.png';
          const liEdit = document.createElement('img');
          liEdit.className = 'edit_img';
          liEdit.src = '../assets/img/writing.png';

          btnEdit.appendChild(liEdit);
          btnDelete.appendChild(liDelete);
          const postFilter = doc.data().id === user.uid;
          if (postFilter) {
            namePost(doc.id, user.displayName);
            cajaIcon.appendChild(btnDelete);
            liDelete.setAttribute('id', doc.id);
            cajaIcon.appendChild(btnEdit);
            liEdit.setAttribute('id', doc.id);

            cajaEdit.appendChild(btnSaveText);
          }
          if (postUS.like.includes(user.uid)) {
            btnLike.style.color = 'red';
          }
          contenedorCaja.appendChild(cardDiv);
        });
        divPoster.innerHTML = '';
        divPoster.appendChild(contenedorCaja);
        EditePost();
        poster.appendChild(Delete());
        likePost(user.uid);
      });
    } else {
      poster.style.display = 'none';
    }
  });

  poster.appendChild(divPoster);
  return poster;
};
