import { Register } from '../src/component/Register.js';
import { Rutas } from '../src/lib/rutas.js';
import { formularioregistro, formularioGoogle } from '../src/lib/index.js';

jest.mock('../src/lib/index.js');
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
    expect(ojito2).not.toBeNull();
    ojito2.click();
    expect(pass.type).toBe('text');
    ojito2.click();
    expect(pass.type).toBe('password');
  });
  it('form correcto', () => {
    const elemento = Register();
    const form = elemento.querySelector('.formulario_registro');
    const email = elemento.querySelector('.email_registro');
    const pass = elemento.querySelector('.pass_registro');
    email.value = 'resolve@gmail.com';
    pass.value = '123hdfh';
    form.submit();
    form.reset();
    expect(email.value).toBe('');
    expect(pass.value).toBe('');
    expect(Rutas('registro')).toBe('/profile');
  });
  it('form incorrecto', () => {
    const elemento = Register();
    const form = elemento.querySelector('.formulario_registro');
    const email = elemento.querySelector('.email_registro');
    const pass = elemento.querySelector('.pass_registro');
    const modal = elemento.querySelector('.modal');
    email.value = 'reject@gmail.com';
    pass.value = '123hdfh';
    form.submit();
    const promise = formularioregistro('reject@gmail.com', '123hdfh');
    promise
      .catch((err) => {
        expect(err.code).toBe('auth/email-already-in-use');
        modal.style.display = 'block';
        expect(modal.style.display).toBe('block');
      });
  });
  it('register con google', () => {
    const elemento = Register();
    const boton = elemento.querySelector('.btn_google');
    formularioGoogle.mockImplementationOnce(() => Promise.resolve({}));
    boton.click();
    expect(Rutas('google')).toBe('/Begin');
  });
});
