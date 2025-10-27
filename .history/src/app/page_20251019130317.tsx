"use client";
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { ThemeContext } from "@/context/ThemeContextProvider";
const page = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-auto">
        <HeroSection />
      </main>
    </>
  );
};

export default page;
