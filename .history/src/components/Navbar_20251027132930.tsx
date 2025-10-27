"use client";

import React, { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "@/context/ThemeContextProvider";
import { usePathname, useRouter } from "next/navigation";
import MenuFunnelIcon from "./ui/HamburgerMenuIcon";
import CloseIcon from "@mui/icons-material/Close";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

import Tooltip2 from "@mui/material/Tooltip";
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
    const handleHashChange = () => setActive(window.location.hash);

    // Set initial hash
    setActive(window.location.hash);

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [showNav]);
  // useEffect(() => {
  //   // Function to update the active hash
  //   const updateHash = () => {
  //     const hash = window.location.hash || "#home"; // default fallback
  //     setActive(hash);
  //     console.log("Active section:", hash);
  //   };

  //   // Run once on mount (in case page already loaded with a hash)
  //   updateHash();

  //   // Listen for hash changes
  //   window.addEventListener("hashchange", updateHash);

  //   // Cleanup listener when unmounting
  //   return () => window.removeEventListener("hashchange", updateHash);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // threshold to activate solid navbar
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const dragX = useMotionValue(0);
  const opacity = useTransform(dragX, [0, 150], [1, 0.4]); // fade while swiping
  const overlayOpacity = useTransform(dragX, [0, 150], [0.5, 0]);
  return (
    <>
      <header
        id="home"
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
              onClick={() => {
                setActive("/#home");
              }}
            />
            <NavItem
              href="/#services"
              label="Services"
              tooltip="What I offer"
              active={active}
              onClick={() => {
                setActive("/#services");
              }}
            />
            <NavItem
              href="/#projects"
              label="Projects"
              tooltip="My recent work"
              active={active}
              onClick={() => {
                setActive("/#projects");
              }}
            />
            <NavItem
              href="/#skills-experience"
              label="Skills & Experience"
              tooltip="Work & skills"
              active={active}
              onClick={() => {
                setActive("/#skills-experience");
              }}
            />

            {/* Theme toggle */}
            <Tooltip2
              title={`Change to ${theme === "light" ? "dark" : "light"} mode`}
            >
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                name="Change theme"
                aria-label="Change theme"
                className="px-3 py-1 rounded  text-gray-800 dark:text-gray-200 transition hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </button>
            </Tooltip2>
          </nav>
        </Tooltip.Provider>
        {/* Animated Gradient Button */}
        <Tooltip2 title="Contact us for your project">
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
        </Tooltip2>
        <button
          onClick={() => setShowNav(!showNav)}
          className="inline-flex lg:hidden"
        >
          <MenuFunnelIcon open={open} />
        </button>
      </header>
      <AnimatePresence>
        {showNav && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-end items-start bg-black/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }} // ⚡ Faster overlay fade
          >
            <Tooltip.Provider delayDuration={150}>
              <motion.nav
                ref={navRef}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                style={{ opacity, x: dragX }}
                onDragEnd={(event, info) => {
                  // ✅ Close if user swipes right fast OR drags enough distance
                  const shouldClose =
                    info.offset.x > 100 || info.velocity.x > 600;
                  if (shouldClose) setShowNav(false);
                }}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 12,
                  mass: 0.8,
                }}
                className={`w-[65%] sm:w-1/2 h-[60%] shadow-2xl rounded-l-2xl flex flex-col items-center justify-between py-10 px-6 relative border-l ${
                  theme === "light"
                    ? "bg-white border-gray-200 text-gray-800"
                    : "bg-gray-950 border-gray-800 text-gray-100"
                }`}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowNav(false)}
                  aria-label="Close menu"
                  className={`absolute top-5 right-5 transition-transform hover:scale-110 ${
                    theme === "light"
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <CloseIcon />
                </button>

                {/* Logo or Name (optional, improves CTR) */}

                {/* Navigation Links */}
                <div className="flex flex-col gap-6 w-full items-center">
                  {[
                    {
                      href: "/#home",
                      label: "Home",
                      tooltip: "Go to homepage",
                    },
                    {
                      href: "/#services",
                      label: "Services",
                      tooltip: "What I offer",
                    },
                    {
                      href: "/#projects",
                      label: "Projects",
                      tooltip: "My work",
                    },
                    {
                      href: "/#skills-experience",
                      label: "Skills",
                      tooltip: "My expertise",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex justify-center"
                    >
                      <NavItem
                        href={item.href}
                        label={item.label}
                        tooltip={item.tooltip}
                        active={active}
                        onClick={() => setShowNav(false)}
                      />
                    </motion.div>
                  ))}
                  <button
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                    name="Change theme"
                    aria-label="Change theme"
                    className="px-3 py-1 rounded  text-gray-800 dark:text-gray-200 transition hover:bg-gray-300 dark:hover:bg-gray-700"
                  >
                    {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                  </button>
                </div>

                <button
                  onClick={() => {
                    router.push("/#contact");
                    setShowNav(false);
                  }}
                  className="relative lg:hidden inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-slate-600 dark:focus:ring-offset-gray-900"
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
                {/* Theme Toggle */}
                {/* <div className="mt-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  name="Change theme"
                  aria-label="Change theme"
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                    theme === "light"
                      ? "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300 shadow-sm"
                      : "bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700 shadow-md"
                  }`}
                >
                  {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                  <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                </motion.button>
              </div> */}
              </motion.nav>
            </Tooltip.Provider>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavItem = ({
  href,
  label,
  tooltip,
  active,
  onClick,
}: {
  href: string;
  label: string;
  tooltip: string;
  active: string;
  onClick?: () => void;
}) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Link
          href={href}
          onClick={onClick}
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
