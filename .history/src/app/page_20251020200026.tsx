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
    if (router.asPath.includes("#")) {
      const id = router.asPath.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      // Clean the URL
      router.replace("/"); // simple replace, no shallow needed
    }
  }, [router.asPath, router]);
};
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
