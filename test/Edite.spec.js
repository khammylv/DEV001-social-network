import { EditePost } from '../src/component/Edite.js';

jest.mock('../src/__mocks__/main.js');
describe('test de funcion eliminar post', () => {
  it('debería ser una función', () => {
    expect(typeof EditePost).toBe('function');
  });
});
