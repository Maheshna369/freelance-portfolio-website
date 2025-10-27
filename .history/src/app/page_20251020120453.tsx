"use client";
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import { ThemeContext } from "@/context/ThemeContextProvider";
const page = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-auto">
        <HeroSection />
        <Services />
      </main>
    </>
  );
};

export default page;
