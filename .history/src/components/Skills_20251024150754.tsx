"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/context/ThemeContextProvider";
import { cn } from "@/lib/utils";
import ReactLogo from "@/assets/icons/react.svg";
import TSLogo from "@/assets/icons/typescript.svg";
import NodeLogo from "@/assets/icons/nodedotjs.svg";
import TailwindLogo from "@/assets/icons/tailwindcss.svg";
import BootstrapLogo from "@/assets/icons/bootstrap.svg";
import CssLogo from "@/assets/icons/css.svg";
import HtmlLogo from "@/assets/icons/html5.svg";
import JSLogo from "@/assets/icons/javascript.svg";
import ShopifyLogo from "@/assets/icons/shopify.svg";
import WordpressLogo from "@/assets/icons/wordpress.svg";
import WixLogo from "@/assets/icons/wix.svg";
import SquarespaceLogo from "@/assets/icons/squarespace.svg";
import ExpressLogo from "@/assets/icons/express.svg";
import MongoLogo from "@/assets/icons/mongodb.svg";
import NextLogo from "@/assets/icons/nextdotjs.svg";
type Category =
  | "Frontend"
  | "Backend & Databases"
  | "Styling & Frameworks"
  | "CMS & Platforms";

type Skill = {
  name: string;
  level: number;
  icon?: React.ComponentType<any>;
};

const SkillsExperience: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState<Category>("Frontend");

  const experience = [
    {
      year: "2025",
      title: "Full-Stack Web Developer",
      company: "Self-Initiated Projects",
      description:
        "Built scalable, high-performance web apps using Next.js, Node.js, and MongoDB. Delivered production-ready projects including e-commerce stores, blogs, and chat apps, focusing on clean UI/UX, responsive design, and SEO optimization.",
    },
    {
      year: "2024",
      title: "Frontend Developer",
      company: "Freelance & Personal Projects",
      description:
        "Delivered polished, responsive websites using React & TailwindCSS. Optimized user interfaces for speed, accessibility, and engagement to maximize conversions.",
    },
    {
      year: "2023",
      title: "Robotics & Automation Enthusiast",
      company: "CCTC",
      description:
        "Completed an advanced robotics course, mastering electronics, automation, and programming. Strengthened problem-solving and logical thinking for software architecture.",
    },
  ];

  const skills: Record<Category, Skill[]> = {
    Frontend: [
      { name: "HTML", level: 95, icon: HtmlLogo },
      { name: "CSS", level: 90, icon: CssLogo },
      { name: "JavaScript", level: 90, icon: JSLogo },
      { name: "React", level: 95, icon: ReactLogo },
      { name: "TypeScript", level: 85, icon: TSLogo },
    ],
    "Backend & Databases": [
      { name: "Node.js", level: 80, icon: NodeLogo },
      { name: "Express.js", level: 80, icon: ExpressLogo },
      { name: "Next.js", level: 85, icon: NextLogo },
      { name: "MongoDB", level: 75, icon: MongoLogo },
    ],
    "Styling & Frameworks": [
      { name: "TailwindCSS", level: 90, icon: TailwindLogo },
      { name: "Bootstrap", level: 60, icon: BootstrapLogo },
    ],
    "CMS & Platforms": [
      { name: "WordPress", level: 80, icon: WordpressLogo },
      { name: "Shopify", level: 75, icon: ShopifyLogo },
      { name: "Wix", level: 70, icon: WixLogo },
      { name: "Squarespace", level: 65, icon: SquarespaceLogo },
    ],
  };

  const categories = Object.keys(skills) as Category[];

  return (
    <section
      id="skills-experience"
      className="w-full flex flex-col pt-20 pb-0 lg:pb-8 "
    >
      {/* Title & Description */}
      <div className="w-full flex flex-col justify-center items-center text-left lg:text-left">
        <h2 className="  text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          Experience & Skills That Drive Impact
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-1 lg:mb-5">
          From self-initiated projects to freelance development, here’s my
          journey and the technical skills I use to craft production-ready web
          apps that deliver results.
        </p>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-3 lg:gap-0 lg:justify-between lg:items-center mt-3 lg:mt-0">
        {/* LEFT: Experience Timeline */}
        <div className="lg:w-1/2 flex flex-col relative">
          <div className="absolute left-0 top-0 w-1 bg-gray-300 dark:bg-gray-700 h-full"></div>
          <div className="ml-5 flex flex-col gap-12">
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

        {/* RIGHT: Skills Tabs */}
        <div className="lg:w-1/2 hidden lg:flex flex-col gap-6">
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full font-semibold transition-all",
                  activeCategory === cat
                    ? "bg-blue-600 text-white dark:bg-blue-400"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills[activeCategory].map((skill, idx) => (
              <motion.div
                key={idx}
                className={cn(
                  "flex flex-col gap-2 p-4 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-transparent hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {skill.name}
                  </h4>
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
