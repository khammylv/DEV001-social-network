// eslint-disable-next-line max-len
// import { checkapp, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import * as index from '../src/lib/index.js';

jest.mock('firebase/auth');

describe('test de index', () => {
  it('funcion registro', () => {
    expect(typeof index.formularioregistro).toBe('function');
  });
  it('funcion login', () => {
    expect(typeof index.formulariologin).toBe('function');
  });
  it('funcion google', () => {
    expect(typeof index.formularioGoogle).toBe('function');
  });
  it('funcion crear post', () => {
    expect(typeof index.createPost).toBe('function');
  });
  it('funcion eliminar post', () => {
    expect(typeof index.deleteTasks).toBe('function');
  });
  it('funcion obtener post', () => {
    expect(typeof index.onGetTasks).toBe('function');
  });
  it('funcion editar post', () => {
    expect(typeof index.updateTask).toBe('function');
  });
  it('funcion cerrar sesion', () => {
    expect(typeof index.signOut).toBe('function');
  });
});
