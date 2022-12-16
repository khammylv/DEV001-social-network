import {
  updateTask, onGetTask,
} from '../lib/index.js';

const likeHandler = (id, likes) => {
  updateTask(id, {
    like: likes,
  });
};

export const likePost = (user) => {
  const poste = document.querySelector('.cajapost');
  const likeBtn = poste.querySelectorAll('.btnLike');
  likeBtn.forEach((likes) => {
    likes.addEventListener('mouseup', (e) => {
      const id = e.target.id;
      onGetTask(id).then((res) => {
        const post = res.data();
        if (!post.like.includes(user)) {
          const likesNew = [...post.like, user];
          likeHandler(id, likesNew);
        } else {
          const filterUs = post.like.filter((elemento) => elemento !== user);
          likeHandler(id, filterUs);
        }
      });
    });
  });
};
