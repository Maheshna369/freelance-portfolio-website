import React from "react";
import { HoverEffect } from "./ui/card-hover-effects";
const Projects = () => {
  const projects = [
    {
      title: "Next JS E-Commerce Store",
      description: "Full-stack Next.js store with Stripe payments.",
      image: "/projects/ecommerce.png",
      liveDemo: "https://demo.com",
      github: "https://github.com/yourrepo",
      skills: [],
    },
    {
      title: "Next JS Blog App",
      description: "Fast, responsive personal portfolio built in Next.js.",
      image: "/projects/blogapp.png",
      liveDemo: "https://portfolio.com",
      github: "https://github.com/yourrepo",
    },
    {
      title: "Next JSPortfolio Website",
      description: "Fast, responsive personal portfolio built in Next.js.",
      image: "/projects/portfolio.png",
      liveDemo: "https://portfolio.com",
      github: "https://github.com/yourrepo",
    },
    {
      title: "Full-Stack Weather App",
      description: "Fast, responsive personal portfolio built in Next.js.",
      image: "/projects/weatherapp.png",
      liveDemo: "https://portfolio.com",
      github: "https://github.com/yourrepo",
    },
    {
      title: "React To-Do List",
      description: "Fast, responsive personal portfolio built in Next.js.",
      image: "/projects/todolist.png",
      liveDemo: "https://portfolio.com",
      github: "https://github.com/yourrepo",
    },
  ];

  <HoverEffect items={projects} />;

  return (
    <section className="w-full flex flex-col justify-center items-stretch py-8">
      <h2 className="w-full flex justify-center items-center">
        I Don’t Just Build Websites — I Build Proof.
      </h2>
      <p className="w-full flex justify-center items-center">
        Fast. Scalable. Client-ready. Every project below is built to perform,
        convert, and grow businesses. No templates. No fluff. Just results.{" "}
      </p>
      <div className="w-full">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export default Projects;
