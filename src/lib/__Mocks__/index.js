//  jes nos permite simular esta funcion en register login y google (Mock)
export const formularioregistro = () => jest.fn();
export const formulariologin = () => jest.fn();
export const formularioGoole = () => jest.fn();
export const createPost = () => jest.fn(() => Promise.resolve());
export const onGetTasks = () => jest.fn(() => Promise.resolve());
export const deleteTasks = () => jest.fn(() => Promise.resolve());
export const updateTask = () => jest.fn(() => Promise.resolve());
export const signOut = () => jest.fn(() => Promise.resolve());
