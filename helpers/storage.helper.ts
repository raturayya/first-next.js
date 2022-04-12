export default {
  get: (name: string) => {
    const storage = localStorage.getItem(name);

    return storage ? JSON.parse(storage) : null;
  },
  set: (name: string, value: any) => {
    return localStorage.setItem(name, JSON.stringify(value));
  },
  remove: (name: string) => {
    return localStorage.removeItem(name);
  },
  removeAll: () => {
    return localStorage.clear();
  }
};
