import { Register } from '../src/component/Register.js';
import { Begin } from '../src/component/Begin.js';
import { Login } from '../src/component/Login.js';
import { Home } from '../src/component/Home.js';

jest.mock('../src/__mocks__/main.js');
jest.mock('../src/lib/__mocks__/modal.js');
jest.mock('firebase/auth');

describe('test de registro', () => {
  it('debería ser una función', () => {
    expect(typeof Register).toBe('function');
  });
  it('Existe el boton crear cuenta', () => {
    const elemento = Register();
    const boton = elemento.querySelector('.btn_formulario_registro');
    expect(boton).not.toBeNull();
  });
  it('Existe el boton regresar', () => {
    const elemento = Register();
    const boton = elemento.querySelector('.btn_home_registro');
    expect(boton).not.toBeNull();
  });
  it('Existe el boton de google', () => {
    const elemento = Register();
    const boton = elemento.querySelector('.btn_google');
    expect(boton).not.toBeNull();
  });
});

describe('testd de begin', () => {
  it('debería ser una función', () => {
    expect(typeof Begin).toBe('function');
  });
  it('Existe el boton regresar a home', () => {
    const elemento = Begin();
    const boton = elemento.querySelector('.btn_regresar');
    expect(boton).not.toBeNull();
  });
  it('Existe el boton regresar atras', () => {
    const elemento = Begin();
    const boton = elemento.querySelector('.btn_atras');
    expect(boton).not.toBeNull();
  });
  it('Existe el boton cerrar secion', () => {
    const elemento = Begin();
    const boton = elemento.querySelector('.btn_cerrar');
    expect(boton).not.toBeNull();
  });
});

describe('testd de login', () => {
  it('debería ser una función', () => {
    expect(typeof Login).toBe('function');
  });
  it('Existe el boton inicio de sesion', () => {
    const elemento = Login();
    const boton = elemento.querySelector('.btn_fotm_login');
    expect(boton).not.toBeNull();
  });
  it('Existe el boton regresar', () => {
    const elemento = Login();
    const boton = elemento.querySelector('.btn_home_registro2');
    expect(boton).not.toBeNull();
  });
});

describe('testd de home', () => {
  it('debería ser una función', () => {
    expect(typeof Home).toBe('function');
  });
  it('Existe el boton de inicio de sesion', () => {
    const elemento = Home();
    const boton = elemento.querySelector('.botoniniciosesion');
    expect(boton).not.toBeNull();
  });
  it('Existe el boton de crear cuenta', () => {
    const elemento = Home();
    const boton = elemento.querySelector('.botonregistro');
    expect(boton).not.toBeNull();
  });
});

// // eslint-disable-next-line jest/no-identical-title
// describe('testd de google', () => {
//   it('debería ser una función', () => {
//     expect(typeof Register).toBe('function');
//   });
//   it('Existe el boton de registro con google', () => {
//     const elemento = Register();
//     const boton = elemento.querySelector('.btn_google');
//     expect(boton).not.toBeNull();
//   });
//   // it('Existe el boton de crear cuenta', () => {
//   //  const elemento = Register();
//   // const boton = elemento.querySelector('.botonregistro');
//   //  expect(boton).not.toBeNull();
//   // });
// });
