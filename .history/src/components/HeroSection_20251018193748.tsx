"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between py-24 px-6 sm:px-10 md:px-16 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl text-gray-900 dark:text-white"
        >
          I Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Conversion-Driven Websites
          </span>{" "}
          That Help You Scale
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
        >
          I’m{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Mahesh Nayak
          </span>
          , a freelance web developer specializing in{" "}
          <span className="font-medium">
            Next.js, React, and the MERN stack
          </span>
          . I help businesses and creators craft digital experiences that
          attract attention, build trust, and drive results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-4 mt-8 flex-wrap justify-center lg:justify-start"
        >
          <Link
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            Let’s Build Something
          </Link>
          <Link
            href="#projects"
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            View My Work
          </Link>
        </motion.div>
      </div>

      {/* Right: Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex-1 flex justify-center lg:justify-end mb-10 lg:mb-0 relative"
      >
        <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-[28rem] lg:h-[34rem] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-300 dark:ring-gray-700">
          <Image
            src="/profile.png" // replace with your realistic headshot
            alt="Mahesh Nayak"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Glow gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent dark:from-black/30"></div>
        </div>

        {/* Floating gradient accent */}
        <div className="absolute -z-10 w-[30rem] h-[30rem] bg-gradient-to-r from-blue-500/20 to-purple-500/30 blur-3xl rounded-full top-20 right-10"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
