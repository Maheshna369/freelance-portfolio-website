import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="w-full h-20 flex justify-between items-center">
      <h1>Mahesh Nayak</h1>
      <nav className="flex justify-evenly items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/#services"}>Services</Link>
        <Link href={"/#projects"}>Projects</Link>
        <Link href={"/#experience"}>Experience</Link>
        <Link href={"/#about"}>About</Link>
        <Link href={"/#contact"}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
