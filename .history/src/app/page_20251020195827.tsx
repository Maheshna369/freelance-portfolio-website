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
    // Listen for hash changes in the URL
    const handleHashChange = () => {
      if (window.location.hash) {
        // Scroll to the element with the hash
        const id = window.location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }

        // Remove the hash from URL without reloading page
        router.replace("/", undefined);
      }
    };

    // Trigger once on page load if hash exists
    handleHashChange();

    // Listen to hash changes (optional if users manually type #something)
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [router]);
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
