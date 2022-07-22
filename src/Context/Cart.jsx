import React, { createContext, useState } from "react";
export const CartContext = createContext();
export const Cart = ({ children }) => {
  const [state, setState] = useState("harshal");
  return <CartContext value={{ state }}>{children}</CartContext>;
};
