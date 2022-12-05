import { Share } from '../src/component/PostShare.js';
import { viewUser, createPost } from '../src/lib/index.js';

jest.mock('firebase/auth');
jest.mock('../src/lib/index.js');
describe('test de funcion eliminar post', () => {
  it('debería ser una función', () => {
    expect(typeof Share).toBe('function');
  });
  it('Existe el boton de enviar formulario', () => {
    const elemento = Share();
    const boton = elemento.querySelector('.botonPost');
    expect(boton).not.toBeNull();
  });
  it('debería existir el boton enviar post', () => {
    const elemento = Share();
    const boton = elemento.querySelector('.botonPost');
    expect(boton).not.toBeNull();
  });
  it('debería ser llamada', () => {
    expect(viewUser).toHaveBeenCalled();
  });

  it('debería retornar un objeto con la propiedad post', () => createPost('Hola a todos', 'camila', '5550121').then((Post) => {
    expect(Post).toEqual({ Post: { post: 'Hola a todos', name: 'camila', id: '5550121' } });
  }));
});
