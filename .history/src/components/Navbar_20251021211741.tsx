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
    typeof window !== "undefined" ? window.location.hash || "#home" : "#home"
  );

  // Track hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
      console.log("Hash changed to:", window.location.hash);
    };

    // Listen to hash changes
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    // Initial hash
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`w-full h-20 flex justify-between items-center sticky top-0 z-50 ${
        scrolled
          ? "bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
          : "bg-transparent"
      } text-gray-900 dark:text-white transition-colors`}
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
                  className={`relative pb-1 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeHash === item.href
                      ? "after:w-full text-blue-600 dark:text-blue-400"
                      : "after:w-0 text-gray-900 dark:text-white"
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

      {/* Contact Button */}
      <button className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-slate-600 dark:focus:ring-offset-gray-900">
        <span
          className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${
            theme === "light"
              ? "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
              : "bg-[conic-gradient(from_90deg_at_50%_50%,#C1FFEB_0%,#1F2937_50%,#C1FFEB_100%)]"
          }`}
        />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl ${
            theme === "light"
              ? "bg-white text-gray-900"
              : "bg-gray-900 text-gray-100"
          } px-4 py-2 text-sm font-medium backdrop-blur-2xl transition-colors duration-200`}
        >
          Contact us
        </span>
      </button>
    </header>
  );
};

export default Navbar;
