import React, { createContext, useState } from "react";

export const Theame = createContext();

export const TheameContext = ({ children }) => {
  const [theame, setTheame] = useState("light");

  const handleTheame = () => {
    if (theame === "light") {
      setTheame("dark");
      console.log(theame);
    } else if (theame === "dark") {
      setTheame("light");
      console.log(theame);
    }
  };
  return (
    <Theame.Provider value={{ theame, handleTheame }}>
      {children}
    </Theame.Provider>
  );
};
