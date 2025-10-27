import React, {
  useState,
  createContext,
  SetStateAction,
  useLayoutEffect,
} from "react";

interface props {
  theme: string;
  setTheme: React.Dispatch<SetStateAction<String>>;
}
export const ThemeContext = createContext<props>({
  theme: "light",
  setTheme: () => {},
});
const ThemeContextProvider = ({ childern }) => {
  const [theme, setTheme] = useState<string>("light");
  useLayoutEffect(() => {
    try {
      const theme = localStorage.getItem("theme");

      if (theme === "light") {
        document.documentElement.classList.add();
      }
    } catch (error) {}
  }, []);
  return <div></div>;
};

export default ThemeContext;
