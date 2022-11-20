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

export const signInWithEmailAndPassword = jest.fn().mockResolvedValue({
  user: { email: 'camila01@gmail.com' },
});

export const onAuthStateChanged = jest.fn();
export const updateProfile = jest.fn();
export const signInWithPopup = jest.fn().mockResolvedValue({
  user: { email: 'camila55@gmail.com' },
});
