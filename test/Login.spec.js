import { Login } from '../src/component/Login.js';

jest.mock('../src/__mocks__/main.js');
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
    pass.type = 'text';
    expect(ojito2).not.toBeNull();
    ojito2.click();
    expect(pass.type).toBe('password');
  });
  it('cambia el class', () => {
    const elemento = Login();
    const ojito2 = elemento.querySelector('.ojito');
    const pass = elemento.querySelector('.passLogin');
    pass.type = 'password';
    ojito2.click();
    expect(pass.type).toBe('text');
  });
});
