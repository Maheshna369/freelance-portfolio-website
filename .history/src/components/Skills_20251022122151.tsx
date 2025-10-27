"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/context/ThemeContextProvider";
import { cn } from "@/lib/utils";
import ReactLogo from "@/assets/icons/react.svg";
import TSLogo from "@/assets/icons/typescript.svg";
import NodeLogo from "@/assets/icons/nodedotjs.svg";
import TailwindLogo from "@/assets/icons/tailwindcss.svg";

const SkillsExperience: React.FC = () => {
  const { theme } = useContext(ThemeContext);

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

  return (
    <section
      id="skills-experience"
      className="w-full flex flex-col gap-12 py-20 px-4"
    >
      {/* High CTR Title & Description */}
      <div className="w-full flex flex-col items-start gap-4 max-w-4xl mx-auto text-left">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          🚀 Experience & Skills That Drive Impact
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          From internships to full-stack development, here’s my journey and the
          technical skills I use to build high-quality web apps.
        </p>
      </div>

      {/* TWO-COLUMN LAYOUT: Left Experience | Right Skills */}
      <div className="w-full flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* LEFT: Experience Timeline */}
        <div className="lg:w-1/2 flex flex-col relative">
          <div className="absolute left-4 top-0 w-1 bg-gray-300 dark:bg-gray-700 h-full"></div>
          <div className="ml-10 flex flex-col gap-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900"></span>
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

        {/* RIGHT: Skills Grid */}
        <div className="lg:w-1/2 flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className={cn(
                  "flex flex-col gap-2 p-4 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-transparent hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300"
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  {skill.icon && (
                    <skill.icon
                      className={cn(
                        "w-6 h-6",
                        theme === "dark" ? "fill-white" : "fill-black"
                      )}
                    />
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-3 bg-blue-600 dark:bg-blue-400 rounded-full"
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
      </div>
    </section>
  );
};

export default SkillsExperience;
