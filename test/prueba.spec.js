/**
 * @jest-environment jsdom
 */
import { checkapp, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import * as index from '../src/lib/index.js';

jest.mock('firebase/auth');

describe('testd de index', () => {
  it('tes', () => {
    // eslint-disable-next-line global-require
    const testIndex = require('../src/lib/index.js');
    console.log(testIndex);
    expect(checkapp).toHaveBeenCalled();
  });

  it('test de crear usuario', () => index.formularioregistro('a', 'b', 'c').then((email) => {
    expect(createUserWithEmailAndPassword).not.toHaveBeenCalledWith();
    expect(email).toStrictEqual({ email: 'jaja@gmail.com' });
  }));
  it('test de logear usuario', () => index.formulariologin('a', 'b', 'c').then((email) => {
    expect(signInWithEmailAndPassword).not.toHaveBeenCalledWith();
    expect(email).toStrictEqual({ email: 'camila01@gmail.com' });
  }));
});
