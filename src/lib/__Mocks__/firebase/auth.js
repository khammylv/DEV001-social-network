export const getAuth = jest.fn();
export const checker = jest.fn();
export const checkapp = jest.fn();
export class GoogleAuthProvider {
  constructor(app) {
    this.checker = checker;
    checkapp(app);
  }
}
export const createUserWithEmailAndPassword = jest.fn().mockResolvedValue({
  user: { email: 'jaja@gmail.com' },
});
