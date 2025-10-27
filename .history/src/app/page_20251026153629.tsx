"use client";
import React, { useContext, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import { ThemeContext } from "@/context/ThemeContextProvider";
import { useRouter } from "next/navigation";
import Projects from "@/components/Projects";
import { Toaster } from "react-hot-toast";
import { FloatingNavDemo } from "@/components/FloatingNavbar";
import SkillsExperience from "@/components/Skills";
import Contact from "@/components/Contact";
const page = () => {
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }

        // Clean the hash from the URL
        router.replace("/", undefined);
      }
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Check for hash on initial load
    handleHashChange();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [router]);

  return (
    <>
      {/* <FloatingNavDemo /> */}
      <Toaster position="top-right" />
      <Navbar />
      <main className="m-0 p-0 px-8 lg:px-20  bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <HeroSection />
        <Services />
        <Projects />
        <SkillsExperience />
        <Contact />
      </main>
    </>
  );
};

export default page;
