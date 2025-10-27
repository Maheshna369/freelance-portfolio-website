"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-between lg:pt-8 p-0 lg:pb-8 overflow-hidden ">
      {/* Left Content */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex-1 flex flex-col items-center lg:items-start text-left lg:text-left space-y-6 max-w-2xl z-10">
          {/* Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-wide text-sm font-semibold text-blue-600 dark:text-blue-400 hidden lg:inline-block"
          >
            Freelance Web Developer • Next.js / MERN Specialist
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            Websites That{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Don’t Just Look Good—They Sell
            </span>
          </motion.h1>

          {/* Subheadline / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300"
          >
            Hey, I’m{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Mahesh
            </span>
            . I build fast, modern websites that turn visitors into paying
            clients. Using{" "}
            <span className="font-medium">
              Next.js, React, and the MERN stack
            </span>
            , your site won’t just exist—it will sell.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex  gap-4 mt-5 lg:mt-8 flex-wrap justify-start lg:justify-start"
          >
            <Link
              href="#contact"
              className="px-8 py-2 lg:px-10 lg:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-xl transition-transform duration-300 shadow-blue-500/30"
            >
              Let’s Build Your Website →
            </Link>
            <Link
              href="#projects"
              className="px-8 py-2 lg:px-10 lg:py-4  rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              View My Projects
            </Link>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:flex items-center gap-6 mt-10 text-gray-600 dark:text-gray-400 text-sm flex-wrap justify-center lg:justify-start"
          >
            <span>🚀 10+ Businesses Already Growing Online</span>
            <span>⭐ 100% Happy Clients Who Keep Coming Back</span>
            <span>⚡ Websites That Launch Fast & Convert Faster</span>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 flex justify-center lg:justify-end mb-10 lg:mb-0 relative"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl shadow-blue-500/20 transition-transform duration-500 hover:scale-105 hover:rotate-1">
            <Image
              src="/profile.png"
              alt="Mahesh Nayak"
              fill
              className="object-cover object-center rounded-full"
              priority
            />
          </div>

          {/* Subtle glow behind */}
          <div className="absolute hidden lg:inline-block -z-10 w-96 h-96 bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl rounded-full top-8 right-8 animate-pulse-slow"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
