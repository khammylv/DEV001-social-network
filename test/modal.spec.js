import { modalMensaje } from '../src/lib/modal.js';

describe('testd de modal', () => {
  it('debería ser una función', () => {
    expect(typeof modalMensaje).toBe('function');
  });
  // eslint-disable-next-line jest/no-focused-tests
  it.only('Existe el boton de cerrar', () => {
    const elemento = modalMensaje();
    const boton = elemento.querySelector('.close');
    expect(boton).not.toBeNull();
  });
});
