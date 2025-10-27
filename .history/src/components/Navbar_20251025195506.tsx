"use client";

import React, { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "@/context/ThemeContextProvider";
import { usePathname, useRouter } from "next/navigation";
import MenuFunnelIcon from "./ui/HamburgerMenuIcon";
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Function to close modal if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setShowNav(false);
      }
    };

    // Add event listener when modal is open
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener when modal is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Function to update the active hash
    const updateHash = () => {
      const hash = window.location.hash || "#home"; // default fallback
      setActive(hash);
      console.log("Active section:", hash);
    };

    // Run once on mount (in case page already loaded with a hash)
    updateHash();

    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);

    // Cleanup listener when unmounting
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // threshold to activate solid navbar
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`w-full h-20 flex justify-between items-center  ${
          scrolled
            ? "bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
            : "bg-transparent"
        } text-gray-900 dark:text-white sticky top-0 z-50 `}
      >
        {/* Branding */}
        <h1 className="text-xl font-bold tracking-wide">
          <Link href="/#home">Mahesh Nayak</Link>
        </h1>

        <Tooltip.Provider delayDuration={200}>
          <nav className="hidden lg:flex items-center gap-6 font-medium">
            <NavItem
              href="/#home"
              label="Home"
              tooltip="Go to homepage"
              active={active}
            />
            <NavItem
              href="/#services"
              label="Services"
              tooltip="What I offer"
              active={active}
            />
            <NavItem
              href="/#projects"
              label="Projects"
              tooltip="My recent work"
              active={active}
            />
            <NavItem
              href="/#skills-experience"
              label="Skills & Experience"
              tooltip="Work & skills"
              active={active}
            />
            <NavItem
              href="/#about"
              label="About"
              tooltip="Who I am"
              active={active}
            />

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              name="Change theme"
              aria-label="Change theme"
              className="px-3 py-1 rounded  text-gray-800 dark:text-gray-200 transition hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </button>
          </nav>
        </Tooltip.Provider>
        {/* Animated Gradient Button */}
        <button
          onClick={() => {
            router.push("/#contact");
          }}
          className="relative hidden lg:inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-slate-600 dark:focus:ring-offset-gray-900"
        >
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
        <button
          onClick={() => setShowNav(!showNav)}
          className="inline-flex lg:hidden"
        >
          <MenuFunnelIcon open={open} />
        </button>
      </header>
      {showNav && (
        <div ref={navRef} className="w-full h-full fixed right-0 inset-0 ">
          <Tooltip.Provider delayDuration={200}>
            <nav className=" w-1/2 h-1/2 flex flex-col justify-center items-center lg:hidden ">
              <NavItem
                href="/#home"
                label="Home"
                tooltip="Go to homepage"
                active={active}
              />
              <NavItem
                href="/#services"
                label="Services"
                tooltip="What I offer"
                active={active}
              />
              <NavItem
                href="/#projects"
                label="Projects"
                tooltip="My recent work"
                active={active}
              />
              <NavItem
                href="/#skills-experience"
                label="Skills & Experience"
                tooltip="Work & skills"
                active={active}
              />
              <NavItem
                href="/#about"
                label="About"
                tooltip="Who I am"
                active={active}
              />

              {/* Theme toggle */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                name="Change theme"
                aria-label="Change theme"
                className="px-3 py-1 rounded  text-gray-800 dark:text-gray-200 transition hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </button>
            </nav>
          </Tooltip.Provider>
        </div>
      )}
    </>
  );
};

const NavItem = ({
  href,
  label,
  tooltip,
  active,
}: {
  href: string;
  label: string;
  tooltip: string;
  active: string;
}) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Link
          href={href}
          className={`relative pb-1 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
            active === href
              ? "after:w-full text-blue-600 dark:text-blue-400"
              : "after:w-0"
          } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full`}
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
