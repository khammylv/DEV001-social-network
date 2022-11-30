import { Share } from '../src/component/PostShare.js';
// import { onNavigate } from '../src/main.js';

jest.mock('firebase/auth');
describe('test de funcion eliminar post', () => {
  it('debería ser una función', () => {
    expect(typeof Share).toBe('function');
  });
  it('Existe el boton de enviar formulario', () => {
    const elemento = Share();
    const boton = elemento.querySelector('.botonPost');
    expect(boton).not.toBeNull();
  });
});
