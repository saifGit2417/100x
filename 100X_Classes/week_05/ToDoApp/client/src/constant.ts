export const getLocalStorageValue = (key: string) => {
  let localStorageValue = localStorage.getItem(key);
  return localStorageValue;
};
