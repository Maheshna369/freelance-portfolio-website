import React from "react";
import { HoverEffect } from "./ui/card-hover-effects";
import ReactLogo from "@/assets/icons/react.svg";
import NextLogo from "@/assets/icons/nextdotjs.svg";
import TailwindLogo from "@/assets/icons/tailwindcss.svg";
import TSLogo from "@/assets/icons/typescript.svg";

const Projects = () => {
  const projects = [
    {
      title: "Next JS E-Commerce Store",
      description: "Full-stack Next.js store with Stripe payments.",
      image: "/projects/ecommerce.png",
      liveDemo: "https://demo.com",
      github: "https://github.com/yourrepo",
      skills: [NextLogo, ReactLogo, TSLogo, TailwindLogo],
    },
    {
      title: "Next JS Blog App",
      description: "Fast, responsive personal portfolio built in Next.js.",
      image: "/projects/blogapp.png",
      liveDemo: "https://portfolio.com",
      github: "https://github.com/yourrepo",
      skills: [NextLogo, ReactLogo, TSLogo, TailwindLogo],
    },
  ];

  return (
    <section
      className="w-full flex flex-col justify-center items-stretch pt-20 pb-8 text-gray-900 dark:text-white"
      id="projects"
    >
      <h2 className="text-3xl font-bold text-center mb-4">
        I Don’t Just Build Websites — I Build Proof.
      </h2>
      <p className="text-center mb-12 text-lg text-gray-600 dark:text-gray-300">
        Fast. Scalable. Client-ready. Every project below is built to perform,
        convert, and grow businesses. No templates. No fluff. Just results.
      </p>

      <HoverEffect items={projects} />
    </section>
  );
};

export default Projects;
