"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between py-28 px-6 lg:px-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight max-w-3xl"
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
          <span className="font-medium">
            Next.js, React, and the MERN stack
          </span>
          . I help businesses and creators turn ideas into stunning,
          high-performance digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-4 mt-10 flex-wrap justify-center lg:justify-start"
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
      </div>

      {/* Right: Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex-1 flex justify-center lg:justify-end mb-10 lg:mb-0"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-1 ring-gray-300 dark:ring-gray-700">
          <Image
            src="/profile.jpg" // replace with your actual photo path
            alt="Mahesh Nayak"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
