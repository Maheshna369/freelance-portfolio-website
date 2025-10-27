import React, { useState, createContext } from "react";
export const ThemeContext = createContext({
    theme: "light";
    setTheme: ()=>{}
});
const ThemeContext = () => {
  return <div></div>;
};

export default ThemeContext;
