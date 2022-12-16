import { Delete } from '../src/component/DeletePost.js';
// import { onNavigate } from '../src/main.js';

jest.mock('firebase/auth');
jest.mock('../src/main.js');
describe('test de funcion eliminar post', () => {
  it('debería ser una función', () => {
    expect(typeof Delete).toBe('function');
  });
  // it('Existe el boton cerrar modal', () => {
  //   document.body.innerHTML = '<div id="root"></div>';
  //   const elemento = Delete();
  //   const modal = elemento.querySelector('.modal');
  //   const boton = elemento.querySelector('.close');
  //   expect(boton).not.toBeNull();
  //   boton.click();
  //   expect(modal.style.display).toBe('none');
  // });
});
