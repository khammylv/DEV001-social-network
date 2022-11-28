import { Rutas } from '../src/lib/rutas.js';

describe('test de rutas', () => {
  it('debería ser una función', () => {
    expect(typeof Rutas).toBe('function');
  });
  it('debería retornar "/Begin" para login', () => {
    expect(Rutas('login')).toEqual('/Begin');
  });
  it('debería retornar "/profile" para registro', () => {
    expect(Rutas('registro')).toEqual('/profile');
  });
});
