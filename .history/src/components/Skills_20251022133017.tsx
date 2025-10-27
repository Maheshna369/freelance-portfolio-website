"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
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

const SkillsExperience: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const expLineRef = useRef<HTMLDivElement>(null);
  const skillsLineRef = useRef<HTMLDivElement>(null);
  const [expHeight, setExpHeight] = useState(0);
  const [skillsHeight, setSkillsHeight] = useState(0);

  // Scroll-driven connector line & dot animation
  useEffect(() => {
    const handleScroll = () => {
      const expRect = expLineRef.current?.getBoundingClientRect();
      const skillsRect = skillsLineRef.current?.getBoundingClientRect();

      if (expRect) {
        const scrollProgress = Math.min(
          Math.max(window.innerHeight - expRect.top, 0) / expRect.height,
          1
        );
        setExpHeight(scrollProgress * expRect.height);
      }

      if (skillsRect) {
        const scrollProgress = Math.min(
          Math.max(window.innerHeight - skillsRect.top, 0) / skillsRect.height,
          1
        );
        setSkillsHeight(scrollProgress * skillsRect.height);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experience = [
    {
      year: "2025",
      title: "Full-Stack Web Developer",
      company: "Self-Initiated Projects",
      description:
        "Built high-performance web apps with Next.js, Node.js, and MongoDB. Delivered production-ready projects including e-commerce stores, blogs, and chat apps, focusing on clean UI/UX, SEO, and responsive design.",
    },
    {
      year: "2024",
      title: "Frontend Developer",
      company: "Freelance & Personal Projects",
      description:
        "Delivered polished websites using React & TailwindCSS. Optimized interfaces for speed, accessibility, and engagement to maximize client impact.",
    },
    {
      year: "2023",
      title: "Robotics & Automation Enthusiast",
      company: "CCTC",
      description:
        "Completed an advanced robotics course, mastering electronics, automation, and programming. Strengthened problem-solving & logical thinking for software development.",
    },
  ];

  const skills = {
    Frontend: [
      { name: "React", level: 95, icon: ReactLogo },
      { name: "TypeScript", level: 85, icon: TSLogo },
      { name: "JavaScript", level: 90, icon: JSLogo },
      { name: "HTML", level: 95, icon: HtmlLogo },
      { name: "CSS", level: 90, icon: CssLogo },
    ],
    "Backend & Databases": [
      { name: "Node.js", level: 80, icon: NodeLogo },
      { name: "Express.js", level: 80, icon: ExpressLogo },
      { name: "MongoDB", level: 75, icon: MongoLogo },
      { name: "Next.js", level: 85 },
    ],
    "Styling & Frameworks": [
      { name: "TailwindCSS", level: 90, icon: TailwindLogo },
      { name: "Bootstrap", level: 85, icon: BootstrapLogo },
    ],
    "CMS & Platforms": [
      { name: "WordPress", level: 80, icon: WordpressLogo },
      { name: "Shopify", level: 75, icon: ShopifyLogo },
      { name: "Wix", level: 70, icon: WixLogo },
      { name: "Squarespace", level: 65, icon: SquarespaceLogo },
    ],
  };

  return (
    <section
      id="skills-experience"
      className="w-full flex flex-col gap-12 pt-20 pb-16 px-4 lg:px-20"
    >
      {/* High CTR Title & Description */}
      <div className="w-full flex flex-col justify-center items-center text-center lg:text-left">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          🚀 Experience & Skills That Drive Impact
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
          From self-initiated projects to freelance development, here’s my
          journey and the technical skills I use to craft production-ready web
          apps that deliver results.
        </p>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="w-full flex flex-col lg:flex-row gap-12 relative">
        {/* LEFT: Experience Timeline */}
        <div className="lg:w-1/2 flex flex-col relative">
          <div
            ref={expLineRef}
            className="absolute left-4 top-0 w-1 bg-gray-300 dark:bg-gray-700"
            style={{
              height: `${expHeight}px`,
              transition: "height 0.2s ease-out",
            }}
          ></div>
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
                <motion.span
                  className="absolute -left-6 top-1/2 w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900"
                  animate={{ scale: expHeight > idx * 80 ? 1.3 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                ></motion.span>
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
        <div className="lg:w-1/2 flex flex-col gap-10 relative">
          <div
            ref={skillsLineRef}
            className="absolute left-0 top-8 w-1 bg-gray-300 dark:bg-gray-700"
            style={{
              height: `${skillsHeight}px`,
              transition: "height 0.2s ease-out",
            }}
          ></div>

          {Object.entries(skills).map(([category, skillArr], idx) => (
            <div key={idx} className="flex flex-col gap-4 relative">
              <motion.span
                className="absolute -left-6 top-4 w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900"
                animate={{ scale: skillsHeight > idx * 120 ? 1.3 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              ></motion.span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 pl-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-2">
                {skillArr.map((skill, sidx) => (
                  <motion.div
                    key={sidx}
                    className={cn(
                      "flex flex-col gap-2 p-4 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-transparent hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300"
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: sidx * 0.1 }}
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
                        transition={{ duration: 1.2, delay: sidx * 0.1 }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {skill.level}% mastery
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
