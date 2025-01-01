export const LS_USERNAME = "username";

const getLocalStorage = (key: string): any => localStorage.getItem(key);

const setLocalStorage = (key: string, value: string): any =>
  localStorage.setItem(key, value);

export const getUserName = () => getLocalStorage(LS_USERNAME);
export const setUserName = (name: string) => setLocalStorage(LS_USERNAME, name);
