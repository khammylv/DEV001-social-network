import { Begin } from '../src/component/Begin.js';
import { signOut } from '../src/lib/index.js';

jest.mock('../src/main.js');
jest.mock('firebase/auth');
jest.mock('../src/lib/index.js');
// estos son los test
describe('test de begin', () => {
  it('debería ser una función', () => {
    expect(typeof Begin).toBe('function');
  });
  it('Activar menu lateral', () => {
    const elemento = Begin();
    const botonMenu = elemento.querySelector('.checkMenuIcon');
    const menuLateral = elemento.querySelector('.asideMenu');
    expect(botonMenu).not.toBeNull();
    menuLateral.style.display = 'none';
    botonMenu.click();
    expect(menuLateral.style.display).toBe('block');
  });
  it('desactivar menu lateral', () => {
    const elemento = Begin();
    const botonMenu = elemento.querySelector('.checkMenuIcon');
    const menuLateral = elemento.querySelector('.asideMenu');
    menuLateral.style.display = 'block';
    botonMenu.click();
    expect(menuLateral.style.display).toBe('none');
  });
  it('Debería ser una función', () => {
    expect(typeof signOut).toBe('function');
  });
});
// describe('signOut', () => {
//   beforeEach(() => {
//     getAuth.mockImplementationOnce(() => 'hola');
//     signOut.mockImplementationOnce(() => Promise.resolve('resolve'));
//   });

//   it('Debería ser una función', () => {
//     expect(typeof signOut).toBe('function');
//   });

//   it('Deberia retornar una promesa', () => {
//     expect(signOut()).toBeInstanceOf(Promise);
//   });

//   it('Deberia retornar una promesa resuelta', () => {
//     // eslint-disable-next-line jest/valid-expect
//     expect(signOut()).resolves.toBe('resolve');
//   });
//   it('boton de salir', () => {
//     const elemento = Begin();
//     const botonSalir = elemento.querySelector('.salir');
//     botonSalir.click();
//     // eslint-disable-next-line jest/valid-expect
//     expect(signOut()).resolves.toBe('resolve');
//   });
// });
