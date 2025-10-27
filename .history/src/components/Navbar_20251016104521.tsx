"use client";

import React from "react";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";

const Navbar = () => {
  return (
    <header className="w-full h-40 flex justify-between items-center px-8 bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      {/* Branding */}
      <h1 className="text-xl font-bold tracking-wide">
        <Link href="/">Mahesh Nayak</Link>
      </h1>

      {/* Navigation */}
      <Tooltip.Provider delayDuration={200}>
        <nav className="flex justify-evenly items-center gap-8 text-gray-700 font-medium">
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
        </nav>
      </Tooltip.Provider>
    </header>
  );
};

// Reusable NavItem with Tooltip
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
          className="hover:text-blue-600 transition-colors duration-200"
        >
          {label}
        </Link>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="bottom"
          align="center"
          sideOffset={6}
          className="bg-black text-white text-sm px-3 py-1 rounded-md shadow-md animate-fadeIn"
        >
          {tooltip}
          <Tooltip.Arrow className="fill-black" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};

export default Navbar;
