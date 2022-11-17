export const modalMensaje = (mensaje) => {
  const modal = document.getElementById('mi_modal');
  const textModal = document.getElementById('text_modal');
  const cerrar = document.getElementById('close');
  modal.style.display = 'block';
  textModal.innerText = mensaje;

  cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};
