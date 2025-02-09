export const LS_USERNAME = "username";
export const SEMANTIC_WORD = "semanticWord";

const getLocalStorage = (key: string): any => localStorage.getItem(key);

const setLocalStorage = (key: string, value: string): any =>
  localStorage.setItem(key, value);

export const getUserName = () => getLocalStorage(LS_USERNAME);
export const setUserName = (name: string) => setLocalStorage(LS_USERNAME, name);

export const getSemanticWord = () => getLocalStorage(SEMANTIC_WORD);
export const setSemanticWord = (name: string) =>
  setLocalStorage(SEMANTIC_WORD, name);
