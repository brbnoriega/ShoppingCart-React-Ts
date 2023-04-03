import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T) //type of T or una function que retorne el type of T
) {

  const [value, setValue] = useState<T>(() => {  //t= type generic
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue); // si no es igual a null significa que tenemos valores en nuestro local storage

    // si no tengo valores...
    if (typeof initialValue === "function") { // !f
      return (initialValue as () => T)(); //typescript issues
    } else {
      return initialValue; //sino devuelve los valores iniciales
    }
  });

 
  useEffect(() => { //para correr esto cada vez que la key o los values cambien
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue] as [typeof value, typeof setValue]; //especifico que el primer elemento del array va a tener siempre ese type, y el segundo elemento ese type
}
