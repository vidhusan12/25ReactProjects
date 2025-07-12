import { useState, useEffect } from "react";

export default function useLocalStroage(key, defaultValue){
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
      
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
      
    }
    return currentValue;
  });

    //Syncing your state to localStroage every time it changes
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];

}