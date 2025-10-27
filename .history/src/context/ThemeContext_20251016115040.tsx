"use client";
import React, {
  useState,
  createContext,
  SetStateAction,
  useLayoutEffect,
  ReactNode,
} from "react";

interface Props {
  theme: string;
  setTheme: React.Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<Props>({
  theme: "light",
  setTheme: () => {},
});

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  // Initialize theme from localStorage
  useLayoutEffect(() => {
    try {
      const getTheme = localStorage.getItem("theme");
      if (getTheme === "dark" || getTheme === "light") {
        setTheme(getTheme); // only assign if not null
      }
      if (getTheme === "dark") {
        document.documentElement.classList.add("dark");
        console.log("Removing dark from classList !");
      } else {
        document.documentElement.classList.remove("dark");
        console.log("Adding dark from classList !");
      }
    } catch (error) {
      console.error(`Error while getting theme of the app: ${error}`);
    }
  }, []);

  // Save theme to localStorage whenever it changes
  useLayoutEffect(() => {
    try {
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        console.log("Removing dark from classList !");
      } else {
        document.documentElement.classList.remove("dark");
        console.log("Removing dark from classList !");
      }
    } catch (error) {
      console.error(`Error while saving theme of the app: ${error}`);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
