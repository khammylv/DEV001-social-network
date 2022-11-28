import { Begin } from '../src/component/Begin.js';

jest.mock('../src/__mocks__/main.js');
jest.mock('firebase/auth');

describe('test de begin', () => {
  it('debería ser una función', () => {
    expect(typeof Begin).toBe('function');
  });
  it('Existe el boton cerrar modal', () => {
    const elemento = Begin();
    const modal = elemento.querySelector('.modal');
    const boton = elemento.querySelector('.close');
    expect(boton).not.toBeNull();
    boton.click();
    expect(modal.style.display).toBe('none');
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
