/* eslint-disable import/no-unresolved */
import { Login } from '../src/component/Login.js';
import { Rutas } from '../src/lib/rutas.js';
import { formulariologin, formularioGoogle } from '../src/lib/index.js';

jest.mock('../src/lib/index.js');
jest.mock('../src/main.js');
jest.mock('firebase/auth');

describe('test de login', () => {
  it('debería ser una función', () => {
    expect(typeof Login).toBe('function');
  });
  it('Existe el boton de iniciar sesion', () => {
    const elemento = Login();
    const boton = elemento.querySelector('.btn_form_login');
    expect(boton).not.toBeNull();
  });
  it('Existe el boton de regresar al home', () => {
    const elemento = Login();
    const boton = elemento.querySelector('.btn_home_login');
    expect(boton).not.toBeNull();
  });
  it('Existe el boton cerrar modal', () => {
    const elemento = Login();
    const modal = elemento.querySelector('.modal');
    const boton = elemento.querySelector('.close');
    expect(boton).not.toBeNull();
    boton.click();
    expect(modal.style.display).toBe('none');
  });
  it('Existe el boton ojito', () => {
    const elemento = Login();
    const ojito2 = elemento.querySelector('.ojito');
    const pass = elemento.querySelector('.passLogin');
    expect(ojito2).not.toBeNull();
    ojito2.click();
    expect(pass.type).toBe('text');
    ojito2.click();
    expect(pass.type).toBe('password');
  });
  it('form correcto', () => {
    const elemento = Login();
    const form = elemento.querySelector('.form_login');
    const email = elemento.querySelector('.emailLogin');
    const pass = elemento.querySelector('.passLogin');
    email.value = 'camila01@gmail.com';
    pass.value = '123hdfh';
    form.submit();
    form.reset();
    expect(email.value).toBe('');
    expect(pass.value).toBe('');
    expect(Rutas('login')).toBe('/Begin');
  });
  it('form incorrecto', () => {
    const elemento = Login();
    const form = elemento.querySelector('.form_login');
    const email = elemento.querySelector('.emailLogin');
    const pass = elemento.querySelector('.passLogin');
    const modal = elemento.querySelector('.modal');
    email.value = 'camill@gmail.com';
    pass.value = '123hdfh';
    form.submit();
    const promise = formulariologin('camill@gmail.com', '123hdfh');
    promise
      .catch((err) => {
        expect(err.code).toBe('auth/email-already-in-use');
        modal.style.display = 'block';
        expect(modal.style.display).toBe('block');
      });
  });
  it('register con google', () => {
    const elemento = Login();
    const boton = elemento.querySelector('.btn_googleL');
    formularioGoogle.mockImplementationOnce(() => Promise.resolve({}));
    boton.click();
    expect(Rutas('google')).toBe('/Begin');
  });
});
