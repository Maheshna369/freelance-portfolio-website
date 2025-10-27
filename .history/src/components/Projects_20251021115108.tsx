import React from "react";
import { HoverEffect } from "./ui/card-hover-effects";
const Projects = () => {
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
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
