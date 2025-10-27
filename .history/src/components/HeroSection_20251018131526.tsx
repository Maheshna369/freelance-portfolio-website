"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          I Build{" "}
          <span className="text-blue-600 dark:text-blue-400">
            High-Performance
          </span>{" "}
          Websites That Convert.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
          I’m Mahesh Nayak — a Full Stack Developer specialized in Next.js, MERN
          & AI-powered systems. I help brands build, scale, and automate their
          web presence for maximum growth.
        </p>

        <div className="flex gap-4 pt-2">
          <Link
            href="#projects"
            className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl p-[1px] bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition"
          >
            <span className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold rounded-2xl">
              View Projects
            </span>
          </Link>

          <Link
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Let’s Talk
          </Link>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-10 md:mb-0"
      >
        <img
          src="/hero-image.png"
          alt="Mahesh Nayak"
          className="w-64 md:w-96 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800"
        />
      </motion.div>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default HeroSection;
