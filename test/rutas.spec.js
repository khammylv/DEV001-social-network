import { Rutas } from '../src/lib/rutas.js';

describe('Test de la funcion rutas', () => {
  it('debería retornar "/Begin" para "camila@gmail.com"', () => {
    expect(Rutas('camila@gmail.com')).toBe('/Begin');
  });
  it('debería ser una función', () => {
    expect(typeof Rutas).toBe('function');
  });
});
