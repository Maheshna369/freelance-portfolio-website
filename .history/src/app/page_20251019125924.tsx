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
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
          <div className="w-[600px] h-[600px] bg-gradient-to-tr from-blue-200/10 via-purple-200/10 to-pink-200/10 rounded-full absolute -top-40 -left-40 animate-blob-slow"></div>
          <div className="w-[500px] h-[500px] bg-gradient-to-br from-purple-200/10 via-pink-200/10 to-blue-200/10 rounded-full absolute -bottom-40 -right-40 animate-blob-slow"></div>
        </div>
      </main>
    </>
  );
};

export default page;
