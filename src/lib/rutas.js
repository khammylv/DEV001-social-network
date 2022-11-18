// eslint-disable-next-line consistent-return
export const Rutas = (rutas) => {
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  if (regexEmail.test(rutas)) {
    return '/Begin';
  }
};
