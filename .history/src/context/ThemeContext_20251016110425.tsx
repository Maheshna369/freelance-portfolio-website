import React, { useState, createContext, SetStateAction } from "react";

interface props {
  theme: string;
  setTheme: React.Dispatch<SetStateAction<String>>;
}
export const ThemeContext = createContext<props>({
  theme: "light",
  setTheme: () => {},
});
const ThemeContextProvider = () => {
  return <div></div>;
};

export default ThemeContext;
