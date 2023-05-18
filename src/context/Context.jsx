/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const Context = createContext(null);
export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([
    ...(JSON.parse(localStorage.getItem("basket")) || []),
  ]);
  useEffect(() => {
    const checkLocal = JSON.parse(localStorage.getItem("basket"));
    if (!checkLocal?.length > 0) {
      localStorage.setItem("basket", JSON.stringify(basket));
    } else {
      localStorage.setItem("basket", JSON.stringify([...basket]));
    }
  }, [basket]);
  const values = {
    products,
    setProducts,
    basket,
    setBasket,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
