"use client";

import React, { useContext } from "react";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "@/context/ThemeContext";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full h-20 flex justify-between items-center   backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <h1 className="text-xl font-bold tracking-wide dark:text-gray-900">
        <Link href="/">Mahesh Nayak</Link>
      </h1>

      <Tooltip.Provider delayDuration={200}>
        <nav className="flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
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
          <NavItem href="/#contact" label="Contact" tooltip="Let’s connect" />

          {/* Dark/Light toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </button>
        </nav>
      </Tooltip.Provider>
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
