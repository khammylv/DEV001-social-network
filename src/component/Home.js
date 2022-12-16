export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('section');
  HomeDiv.className = 'contenedor_home';
  const contenedorTodo = document.createElement('div');
  contenedorTodo.className = 'contenedor_todo';
  // logo
  const divLogo = document.createElement('div');
  divLogo.className = 'logo';
  const letraLogo = document.createElement('h1');
  letraLogo.className = 'letraLogo';
  letraLogo.textContent = 'Lymusic';
  // caja de dibujo centro
  const divCentro = document.createElement('div');
  divCentro.className = 'divCentro';
  const imagenCentro = document.createElement('img');
  imagenCentro.className = 'img_centro';
  imagenCentro.src = 'https://i.postimg.cc/9QyrGQ2m/let.gif';

  // caja de los botones
  const divBotones = document.createElement('div');
  divBotones.className = 'divBotones';
  // botonregistro
  const buttonRegister = document.createElement('button');
  buttonRegister.innerText = 'Register';
  buttonRegister.className = 'botonregistro';
  // boton login
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Sign in';
  buttonLogin.className = 'botoniniciosesion';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  divLogo.appendChild(letraLogo);
  divLogo.appendChild(divCentro);
  divCentro.appendChild(imagenCentro);
  divBotones.appendChild(buttonRegister);
  divBotones.appendChild(buttonLogin);
  contenedorTodo.appendChild(divLogo);
  contenedorTodo.appendChild(divBotones);
  HomeDiv.appendChild(contenedorTodo);
  return HomeDiv;
};
