import { checkapp, createUserWithEmailAndPassword } from 'firebase/auth';
import * as index from '../src/lib/index.js';

jest.mock('firebase/auth');

describe('testd de index', () => {
  it('tes', () => {
    // eslint-disable-next-line global-require
    const testIndex = require('../src/lib/index.js');
    console.log(testIndex);
    expect(checkapp).toHaveBeenCalled();
  });
  // eslint-disable-next-line jest/no-focused-tests
  it.only('tes2', () => index.formularioregistro('a', 'b', 'c').then((email) => {
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith();
    expect(email).toBe();
  }));
});
