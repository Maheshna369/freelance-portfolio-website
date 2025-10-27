import React from "react";
import { HoverEffect } from "./ui/card-hover-effects";
const Projects = () => {
  const projects = [];
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
        <HoverEffect />
      </div>
    </section>
  );
};

export default Projects;
