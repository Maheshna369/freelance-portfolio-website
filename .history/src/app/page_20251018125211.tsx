import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import { ThemeContext } from "@/context/ThemeContextProvider";
const page = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="text-gray-900 dark:text-white">Hello World</div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change theme
      </button>
    </>
  );
};

export default page;
