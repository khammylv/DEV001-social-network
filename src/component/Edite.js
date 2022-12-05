/* eslint-disable import/no-unresolved */
import {
  updateTask,
} from '../lib/index.js';

export const EditePost = () => {
  const poste = document.querySelector('.cajapost');
  const editbtn = poste.querySelectorAll('.edit_img');
  editbtn.forEach((btn) => {
    btn.addEventListener('mouseup', (e) => {
      const id = e.target.id;
      const carta = poste.querySelectorAll('.cardCont');
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
          });
        }
      }
    });
  });
};
