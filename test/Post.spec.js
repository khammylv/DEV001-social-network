import { Post } from '../src/component/Post.js';

jest.mock('../src/__mocks__/main.js');
describe('test de post publicados', () => {
  it('debería ser una función', () => {
    expect(typeof Post).toBe('function');
  });
});
