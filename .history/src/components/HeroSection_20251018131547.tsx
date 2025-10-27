"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
return ( <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 sm:px-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
{/* Subtle background gradient glow */} <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />

```
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl"
  >
    I Build Modern Web Experiences That{" "}
    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
      Look Sharp, Load Fast,
    </span>{" "}
    and Drive Results.
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-300"
  >
    I’m <span className="font-semibold text-gray-900 dark:text-white">Mahesh Nayak</span>, a full-stack developer specialized in{" "}
    <span className="text-blue-500 font-semibold">Next.js, MERN, and AI-powered systems</span>.
    I help startups and creators turn ideas into high-performing digital products — fast, scalable, and built to impress.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.5 }}
    className="mt-10 flex flex-wrap justify-center gap-4"
  >
    <Link
      href="#contact"
      className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      Let’s Build Something Great
    </Link>

    <Link
      href="#projects"
      className="px-8 py-3 text-lg font-medium border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
    >
      View My Work
    </Link>
  </motion.div>
</section>
```

);
};

export default HeroSection;
