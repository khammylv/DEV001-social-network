import { Post } from '../src/component/Post.js';

describe('test de post publicados', () => {
  it('debería ser una función', () => {
    expect(typeof Post).toBe('function');
  });
});
