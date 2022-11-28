import { Register } from '../src/component/Register.js';

jest.mock('../src/__mocks__/main.js');
jest.mock('firebase/auth');

describe('test de registro', () => {
  it('debería ser una función', () => {
    expect(typeof Register).toBe('function');
  });
  it('Existe el boton de crear cuenta', () => {
    const elemento = Register();
    const boton = elemento.querySelector('.btn_formulario_registro');
    expect(boton).not.toBeNull();
  });
  it('Existe el boton de crear cuenta con google', () => {
    const elemento = Register();
    const boton = elemento.querySelector('.btn_google');
    expect(boton).not.toBeNull();
  });
  it('Existe el boton de regresar al home', () => {
    const elemento = Register();
    const boton = elemento.querySelector('.btn_home_registro');
    expect(boton).not.toBeNull();
  });
  it('Existe el boton cerrar modal', () => {
    const elemento = Register();
    const modal = elemento.querySelector('.modal');
    const boton = elemento.querySelector('.close');
    expect(boton).not.toBeNull();
    boton.click();
    expect(modal.style.display).toBe('none');
  });
  it('Existe el boton ojito', () => {
    const elemento = Register();
    const ojito2 = elemento.querySelector('.ojito2');
    const pass = elemento.querySelector('.pass_registro');
    pass.type = 'text';
    expect(ojito2).not.toBeNull();
    ojito2.click();
    expect(pass.type).toBe('password');
  });
  it('cambia el class', () => {
    const elemento = Register();
    const ojito2 = elemento.querySelector('.ojito2');
    const pass = elemento.querySelector('.pass_registro');
    pass.type = 'password';
    ojito2.click();
    expect(pass.type).toBe('text');
  });
});
