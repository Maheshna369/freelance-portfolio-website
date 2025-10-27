"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(147,197,253,0.15),transparent_70%)]"></div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight max-w-4xl"
      >
        I Build{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
          Modern Websites
        </span>{" "}
        That Convert Visitors Into Clients
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl"
      >
        I’m{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          Mahesh Nayak
        </span>
        , a freelance web developer specializing in{" "}
        <span className="font-medium">Next.js, React, and the MERN stack</span>.
        I help businesses and creators turn ideas into stunning,
        high-performance digital experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex gap-4 mt-10"
      >
        <Link
          href="#contact"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition"
        >
          Let’s Build Something
        </Link>
        <Link
          href="#projects"
          className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          View My Work
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
