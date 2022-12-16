import { Home } from '../src/component/Home.js';

jest.mock('../src/main.js');
describe('test de home', () => {
  it('debería ser una función', () => {
    expect(typeof Home).toBe('function');
  });
  it('Existe el boton de ir a registro', () => {
    const elemento = Home();
    const boton = elemento.querySelector('.botonregistro');

    expect(boton).not.toBeNull();
  });
  it('Existe el boton de ir a login', () => {
    const elemento = Home();
    const boton = elemento.querySelector('.botoniniciosesion');

    expect(boton).not.toBeNull();
  });
});
