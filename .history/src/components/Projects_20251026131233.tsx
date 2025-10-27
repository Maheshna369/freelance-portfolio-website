import React from "react";
import { motion } from "framer-motion";

import { HoverEffect } from "./ui/card-hover-effects";
import ReactLogo from "@/assets/icons/react.svg";
import NextLogo from "@/assets/icons/nextdotjs.svg";
import TailwindLogo from "@/assets/icons/tailwindcss.svg";
import TSLogo from "@/assets/icons/typescript.svg";
import JSLogo from "@/assets/icons/javascript.svg";
import NodeLogo from "@/assets/icons/nodedotjs.svg";
import MongoLogo from "@/assets/icons/mongodb.svg";
import BootstrapLogo from "@/assets/icons/bootstrap.svg";
const Projects = () => {
  const projects = [
    {
      title: "Next.js E-Commerce Store 🚀",
      description: [
        "💰 Boosts sales with seamless Razorpay payments",
        "📱 Fully responsive, mobile-optimized UI",
        "⚡ Ultra-fast performance for high conversions",
        "🛠 Built with Next.js, React, TypeScript & Tailwind",
      ],
      image: "/projects/ecommerce.png",
      liveDemo: "https://maphy-e-commerce-app.vercel.app",
      github: "https://github.com/Maheshna369/Next-JS-E-Commerce-App",
      skills: [NextLogo, ReactLogo, TSLogo, TailwindLogo],
    },
    {
      title: "Next.js Blog & Portfolio 🌟",
      description: [
        "⚡ Lightning-fast load times & smooth UX",
        "🔍 SEO-optimized for maximum discoverability",
        "📈 Showcase your skills & content professionally",
        "🛠 Built with Next.js, React, JS & Tailwind",
      ],
      image: "/projects/blogapp.png",
      liveDemo: "https://maphy-blog-app.vercel.app",
      github: "https://github.com/Maheshna369/Next-JS-Blog-App",
      skills: [NextLogo, ReactLogo, JSLogo, TailwindLogo],
    },
    {
      title: "Next.js Portfolio Website 🎯",
      description: [
        "🏆 Designed to attract high-paying clients",
        "💻 Responsive & retina-ready visuals",
        "🚀 Optimized for speed & engagement",
        "🛠 Built with Next.js, React, TS & Tailwind",
      ],
      image: "/projects/portfolio.png",
      liveDemo: "https://maphy.vercel.app.com",
      github: "https://github.com/Maheshna369/Portfolio-Website",
      skills: [NextLogo, ReactLogo, TSLogo, TailwindLogo],
    },
    {
      title: "Full-Stack Weather App ☁️",
      description: [
        "🌦 Real-time weather updates with dynamic UI",
        "⚡ Fast & reliable data fetching",
        "📱 Fully responsive for desktop & mobile",
        "🛠 Built with Node.js, React, MongoDB & JS",
      ],
      image: "/projects/weatherapp.png",
      liveDemo: "https://mernstack-weather-app.onrender.com",
      github: "https://github.com/Maheshna369/Full-Stack-Weather-App",
      skills: [NodeLogo, ReactLogo, MongoLogo, JSLogo],
    },
    {
      title: "React To-Do Productivity App ✅",
      description: [
        "📝 Organize tasks efficiently with interactive UI",
        "⚡ Lightning-fast, no lag experience",
        "📱 Responsive & intuitive for all devices",
        "🛠 Built with React, JS & Bootstrap",
      ],
      image: "/projects/todolist.png",
      liveDemo: "https://maphy-todo-list.vercel.app",
      github: "https://github.com/Maheshna369/Todo-List-App",
      skills: [ReactLogo, JSLogo, BootstrapLogo],
    },
    {
      title: "MAIPHY Chat App 💬",
      description: [
        "🤖 AI-powered messaging for smarter conversations",
        "🌐 Cross-device sync & real-time updates",
        "⚡ Blazing-fast, production-ready performance",
        "🛠 Built with Next.js, React, Node.js, TS, Mongo & Tailwind",
      ],
      image: "/projects/comingsoon.png",
      liveDemo: "",
      github: "",
      skills: [NextLogo, ReactLogo, NodeLogo, TSLogo, MongoLogo, TailwindLogo],
    },
  ];

  return (
    <motion.section
      className="w-full flex flex-col justify-center items-stretch pt-20 pb-0 lg:pb-8 text-gray-900 dark:text-white"
      id="projects"
    >
      <h2 className="text-3xl lg:text-5xl font-bold text-left lg:text-center mb-4">
        I Don’t Just Build Websites — I Build Proof.
      </h2>
      <p className="text-left lg:text-center mb-1 lg:mb-5 text-lg text-gray-600 dark:text-gray-300">
        Fast. Scalable. Client-ready. Every project below is built to perform,
        convert, and grow businesses. No templates. No fluff. Just results.
      </p>

      <HoverEffect items={projects} />
    </motion.section>
  );
};

export default Projects;
