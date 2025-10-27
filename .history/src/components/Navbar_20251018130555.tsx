"use client";

import React, { useContext } from "react";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "@/context/ThemeContextProvider";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="w-full h-20 flex justify-between items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white fixed top-0 z-50 ">
      {/* Branding */}
      <h1 className="text-xl font-bold tracking-wide">
        <Link href="/">Mahesh Nayak</Link>
      </h1>

      <Tooltip.Provider delayDuration={200}>
        <nav className="flex items-center gap-6 font-medium">
          <NavItem href="/" label="Home" tooltip="Go to homepage" />
          <NavItem href="/#services" label="Services" tooltip="What I offer" />
          <NavItem
            href="/#projects"
            label="Projects"
            tooltip="My recent work"
          />
          <NavItem
            href="/#experience"
            label="Experience"
            tooltip="Work & skills"
          />
          <NavItem href="/#about" label="About" tooltip="Who I am" />

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </button>
        </nav>
      </Tooltip.Provider>
      {/* Animated Gradient Button */}
      <button className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-slate-600 dark:focus:ring-offset-gray-900">
        {/* Animated gradient background */}
        <span
          className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
              ${
                theme === "light"
                  ? "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                  : "bg-[conic-gradient(from_90deg_at_50%_50%,#C1FFEB_0%,#1F2937_50%,#C1FFEB_100%)]"
              }`}
        />

        {/* Inner button content */}
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl 
              ${
                theme === "light"
                  ? "bg-white text-gray-900"
                  : "bg-gray-900 text-gray-100"
              } 
              px-4 py-2 text-sm font-medium backdrop-blur-2xl transition-colors duration-200`}
        >
          Contact us
        </span>
      </button>
    </header>
  );
};

const NavItem = ({
  href,
  label,
  tooltip,
}: {
  href: string;
  label: string;
  tooltip: string;
}) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Link
          href={href}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          {label}
        </Link>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="bottom"
          align="center"
          sideOffset={6}
          className="bg-black text-white text-sm px-3 py-1 rounded-md shadow-md animate-fadeIn z-[9999]"
        >
          {tooltip}
          <Tooltip.Arrow className="fill-black" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};

export default Navbar;
