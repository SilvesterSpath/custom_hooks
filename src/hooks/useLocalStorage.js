import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    // Check value if it is a function or a value
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;

    // Set to state
    setLocalStorageValue(value);

    // Set to localStorage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
