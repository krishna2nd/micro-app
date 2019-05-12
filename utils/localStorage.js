const localStorage = window.localStorage || {
  setItem: () => {},
  getItem: () => {},
  removeItem: () => {}
};

export default localStorage;
