import { Profile } from '../src/component/Profile.js';

jest.mock('../src/__mocks__/main.js');
jest.mock('firebase/auth');

describe('test de Profile', () => {
  it('debería ser una función', () => {
    expect(typeof Profile).toBe('function');
  });
  it('Existe el boton cerrar modal', () => {
    const elemento = Profile();
    const modal = elemento.querySelector('.modal');
    const boton = elemento.querySelector('.close');
    expect(boton).not.toBeNull();
    boton.click();
    expect(modal.style.display).toBe('none');
  });
});
