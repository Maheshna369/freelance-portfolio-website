import { chown } from "fs";
import React, {
  useState,
  createContext,
  SetStateAction,
  useLayoutEffect,
  ReactNode,
} from "react";

interface props {
  theme: string;
  setTheme: React.Dispatch<SetStateAction<String>>;
}
export const ThemeContext = createContext<props>({
  theme: "light",
  setTheme: () => {},
});
const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");
  useLayoutEffect(() => {
    try {
      const theme = localStorage.getItem("theme");

      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (error) {
      console.error(`Error while getting theme of the app: ${error}`);
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
