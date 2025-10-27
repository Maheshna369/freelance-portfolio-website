"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "@/context/ThemeContextProvider";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>(
    window.location.hash || "#home"
  );

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash changes — triggers re-render only when hash changes
  useEffect(() => {
    const handleHashChange = () =>
      setActiveHash(window.location.hash || "#home");

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []); // Run once to attach listeners

  const navItems = [
    { href: "#home", label: "Home", tooltip: "Go to homepage" },
    { href: "#services", label: "Services", tooltip: "What I offer" },
    { href: "#projects", label: "Projects", tooltip: "My recent work" },
    {
      href: "#experience",
      label: "Skills & Experience",
      tooltip: "Work & skills",
    },
    { href: "#about", label: "About", tooltip: "Who I am" },
  ];

  return (
    <header
      className={`w-full h-20 flex justify-between items-center ${
        scrolled
          ? "bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
          : "bg-transparent"
      } text-gray-900 dark:text-white sticky top-0 z-50`}
    >
      <h1 className="text-xl font-bold tracking-wide">
        <Link href="/">Mahesh Nayak</Link>
      </h1>

      <Tooltip.Provider delayDuration={200}>
        <nav className="flex items-center gap-6 font-medium">
          {navItems.map((item) => (
            <Tooltip.Root key={item.href}>
              <Tooltip.Trigger asChild>
                <Link
                  href={item.href}
                  className={`relative pb-1 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400
                    ${
                      activeHash === item.href
                        ? "after:w-full text-blue-600 dark:text-blue-400"
                        : "after:w-0"
                    } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {item.label}
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="bottom"
                  align="center"
                  sideOffset={6}
                  className="bg-black text-white text-sm px-3 py-1 rounded-md shadow-md animate-fadeIn z-[9999]"
                >
                  {item.tooltip}
                  <Tooltip.Arrow className="fill-black" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-3 py-1 rounded text-gray-800 dark:text-gray-200 transition hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </button>
        </nav>
      </Tooltip.Provider>
    </header>
  );
};

export default Navbar;
