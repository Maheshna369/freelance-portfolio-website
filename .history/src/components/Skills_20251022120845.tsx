"use client";

import React, { useContext, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/context/ThemeContextProvider";
import { cn } from "@/lib/utils";
import ReactLogo from "@/assets/icons/react.svg";
import TSLogo from "@/assets/icons/typescript.svg";
import NodeLogo from "@/assets/icons/nodedotjs.svg";
import TailwindLogo from "@/assets/icons/tailwindcss.svg";

const SkillsExperience: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [activeExp, setActiveExp] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const expRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experience = [
    {
      year: "2025",
      title: "Full-Stack Developer",
      company: "Tech Startup",
      description:
        "Built scalable web apps with Next.js, Node.js, and MongoDB.",
    },
    {
      year: "2024",
      title: "Frontend Developer",
      company: "Freelance Projects",
      description:
        "Delivered high-quality responsive websites using React & TailwindCSS.",
    },
    {
      year: "2023",
      title: "Intern",
      company: "Software Company",
      description:
        "Learned MERN stack, optimized UI/UX, and automated tasks with Node.js scripts.",
    },
  ];

  const skills = [
    { name: "React", level: 95, icon: ReactLogo },
    { name: "TypeScript", level: 85, icon: TSLogo },
    { name: "Node.js", level: 80, icon: NodeLogo },
    { name: "TailwindCSS", level: 90, icon: TailwindLogo },
    { name: "MongoDB", level: 75 },
    { name: "Next.js", level: 85 },
  ];

  // Scroll listener for timeline & progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      // Update active experience
      expRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const offsetTop = ref.offsetTop;
        const offsetBottom = offsetTop + ref.offsetHeight;
        if (scrollPos >= offsetTop && scrollPos <= offsetBottom) {
          setActiveExp(idx);
        }
      });

      // Update timeline progress
      const firstRef = expRefs.current[0];
      const lastRef = expRefs.current[expRefs.current.length - 1];
      if (firstRef && lastRef) {
        const timelineTop = firstRef.offsetTop;
        const timelineBottom = lastRef.offsetTop + lastRef.offsetHeight;
        const progress = Math.min(
          Math.max(
            (scrollPos - timelineTop) / (timelineBottom - timelineTop),
            0
          ),
          1
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills-experience"
      className="w-full flex flex-col lg:flex-row gap-12 py-20 px-4"
    >
      {/* LEFT: Timeline */}
      <div className="lg:w-1/2 relative">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
          Experience
        </h2>

        {/* Timeline Line */}
        <div className="absolute left-5 top-0 w-1 bg-gray-300 dark:bg-gray-700 h-full rounded">
          <motion.div
            className="absolute left-0 top-0 w-full bg-gradient-to-tr from-blue-500 to-purple-500 origin-top rounded"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        <div className="ml-14 flex flex-col gap-14">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              ref={(el) => (expRefs.current[idx] = el)}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <span
                className={cn(
                  "absolute -left-7 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white dark:border-gray-900 shadow-lg transition-all duration-300",
                  activeExp === idx
                    ? "bg-gradient-to-tr from-blue-500 to-purple-500 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 scale-100"
                )}
              ></span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.year}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {exp.title}
              </h3>
              <h4 className="text-md font-medium text-gray-700 dark:text-gray-300">
                {exp.company}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT: Skills */}
      <div className="lg:w-1/2 flex flex-col gap-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className={cn(
                "flex flex-col gap-3 p-5 rounded-2xl shadow-xl bg-white dark:bg-gray-900 border border-transparent hover:border-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-pointer group"
              )}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <div className="flex items-center gap-4">
                {skill.icon && (
                  <skill.icon
                    className={cn(
                      "w-7 h-7",
                      theme === "dark" ? "fill-white" : "fill-black"
                    )}
                  />
                )}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: idx * 0.1 }}
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {skill.level}% mastery
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
