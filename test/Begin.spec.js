import { getAuth } from 'firebase/auth';
import { Begin } from '../src/component/Begin.js';
import { signOut } from '../src/lib/index.js';

jest.mock('../src/__mocks__/main.js');
jest.mock('firebase/auth');
jest.mock('../src/lib/index.js');

describe('test de begin', () => {
  it('debería ser una función', () => {
    expect(typeof Begin).toBe('function');
  });
  it('Activar menu lateral', () => {
    const elemento = Begin();
    const botonMenu = elemento.querySelector('.imgMenu');
    const menuLateral = elemento.querySelector('.asideMenu');
    expect(botonMenu).not.toBeNull();
    menuLateral.style.display = 'none';
    botonMenu.click();
    expect(menuLateral.style.display).toBe('block');
  });
  it('desactivar menu lateral', () => {
    const elemento = Begin();
    const botonMenu = elemento.querySelector('.imgMenu');
    const menuLateral = elemento.querySelector('.asideMenu');
    menuLateral.style.display = 'block';
    botonMenu.click();
    expect(menuLateral.style.display).toBe('none');
  });
});
describe('signOut', () => {
  beforeEach(() => {
    getAuth.mockImplementationOnce(() => 'hola');
    signOut.mockImplementationOnce(() => Promise.resolve('resolve'));
  });

  it('Debería ser una función', () => {
    expect(typeof signOut).toBe('function');
  });

  it('Deberia retornar una promesa', () => {
    expect(signOut()).toBeInstanceOf(Promise);
  });

  it('Deberia retornar una promesa resuelta', async () => {
    await expect(signOut()).resolves.toBe('resolve');
  });
  it('desactivar menu lateral', async () => {
    const elemento = Begin();
    const botonSalir = elemento.querySelector('.salir');
    botonSalir.click();
    await expect(signOut()).resolves.toBe('resolve');
  });
});
