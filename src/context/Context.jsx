/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const Context = createContext(null);
export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([
    ...(JSON.parse(localStorage.getItem("user")) || []),
  ]);
  const [registeredUsers, setRegisteredUsers] = useState([
    ...(JSON.parse(localStorage.getItem("registeredUsers")) || []),
  ]);
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
  useEffect(() => {
    const checkLocal = JSON.parse(localStorage.getItem("user"));
    if (!checkLocal?.length > 0) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.setItem("user", JSON.stringify([...user]));
    }
  }, [user]);
  useEffect(() => {
    const checkLocal = JSON.parse(localStorage.getItem("registeredUsers"));
    if (!checkLocal?.length > 0) {
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    } else {
      localStorage.setItem(
        "registeredUsers",
        JSON.stringify([...registeredUsers])
      );
    }
  }, [registeredUsers]);
  const values = {
    products,
    setProducts,
    basket,
    setBasket,
    user,
    setUser,
    registeredUsers,
    setRegisteredUsers,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
