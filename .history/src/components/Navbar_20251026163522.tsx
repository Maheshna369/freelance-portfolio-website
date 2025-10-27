// Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const hashLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#skills-experience", label: "Skills & Experience" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  // Track hash changes globally
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActive(hash || "home");
    };

    handleHashChange(); // set initial state
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="flex gap-4">
      {hashLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          scroll={false} // important to prevent Next.js from scrolling automatically
          onClick={(e) => {
            const hash = item.href.replace("#", "");

            // If we're already on the same page, prevent Next.js navigation
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.location.hash = hash; // manually update hash
              setActive(hash); // update state immediately
            }
          }}
          className={`${
            active === item.href.replace("#", "")
              ? "text-blue-600 font-bold"
              : "text-gray-800"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
