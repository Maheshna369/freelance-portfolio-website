"use client";
import React, { useContext, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import { ThemeContext } from "@/context/ThemeContextProvider";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch;
  });
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
