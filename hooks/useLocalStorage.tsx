import { useState } from "react";
import { toast } from "react-toastify";

const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      toast.error(`Unable to get value from local storage`, {
        theme: "dark",
      });
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      toast.error(`Unable to set value to local storage`, {
        theme: "dark",
      });
    }
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
