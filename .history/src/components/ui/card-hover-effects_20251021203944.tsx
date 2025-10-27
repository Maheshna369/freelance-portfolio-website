"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContextProvider";
import { Button } from "./moving-border";
import Tooltip from "@mui/material/Tooltip";
import toast, { Toaster } from "react-hot-toast";
import { title } from "process";
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string[]; // array of bullets
    link?: string;
    image: string;
    liveDemo?: string;
    github?: string;
    skills?: React.FC<React.SVGProps<SVGSVGElement>>[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          onClick={() => {
            item.title === "MAIPHY Chat App 💬" && toast("Coming Soon!");
          }}
          className="relative group block w-full h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Hover Background */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full rounded-3xl z-10 bg-neutral-200 dark:bg-slate-800/[0.85]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Card */}
          <Card>
            {/* Image */}
            {item.image && (
              <div className="relative w-full h-48 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}

            {/* Title & Description */}
            <div className="p-4 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <CardTitle>{item.title}</CardTitle>

                {/* Skills */}
                {item.skills && item.skills.length > 0 && (
                  <div className="flex gap-2">
                    {item.skills.slice(0, 4).map((SkillIcon, i) => (
                      <SkillIcon
                        key={i}
                        className={cn(
                          "w-6 h-6 transition-transform duration-200 hover:scale-125",
                          theme === "dark" ? "fill-white" : "fill-black"
                        )}
                      />
                    ))}
                    {item.skills.length > 4 && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        +{item.skills.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Description bullets */}
              <ul className="flex flex-col gap-1 text-sm text-gray-700 dark:text-gray-300 mt-1">
                {item.description.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: i * 0.05 },
                    }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-blue-500 dark:text-blue-400">
                      {bullet.split(" ")[0]}
                    </span>
                    <span>
                      {bullet.replace(bullet.split(" ")[0], "").trim()}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center gap-3 px-4 pb-4 mt-auto">
              {item.liveDemo && (
                <Link href={item.liveDemo} target="_blank">
                  <button
                    className="
          relative flex-1 p-2 rounded-2xl overflow-hidden text-white font-bold
          bg-gradient-to-r from-blue-600 to-blue-500
          hover:from-blue-500 hover:to-blue-400
          shadow-lg shadow-blue-400/40
          transition-all duration-300
          group
        "
                  >
                    {/* Moving border */}
                    <span
                      className="
            absolute inset-0 border-2 border-white opacity-50 rounded-lg
            animate-borderSlide
            pointer-events-none
            mix-blend-overlay
          "
                    />

                    {/* Neon glow pulse */}
                    <span
                      className="
            absolute inset-0 rounded-lg bg-blue-500 opacity-20 blur-xl
            group-hover:opacity-40
            animate-pulseGlow
            transition-all duration-500
          "
                    />

                    <span className="relative z-10">Live Demo</span>
                  </button>
                </Link>
              )}

              {item.github && (
                <Link href={item.github} target="_blank">
                  <button
                    className="
          relative flex-1 p-2 rounded-2xl overflow-hidden border-2 border-white
          dark:text-white text-gray-900 font-bold
          shadow-lg shadow-white/30
          hover:bg-white hover:text-black
          transition-all duration-300
          group
        "
                  >
                    <span
                      className="
            absolute inset-0 border-2 border-black opacity-30 rounded-lg
            animate-borderSlide
            pointer-events-none
          "
                    />
                    <span
                      className="
            absolute inset-0 rounded-lg bg-white/20 opacity-10 blur-xl
            group-hover:opacity-30
            animate-pulseGlow
            transition-all duration-500
          "
                    />
                    <span className="relative z-10">GitHub</span>
                  </button>
                </Link>
              )}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

// Card
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl h-full w-full overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 shadow-lg hover:shadow-2xl transition-shadow duration-300",
        className
      )}
    >
      <div className="relative z-50 flex flex-col h-full">{children}</div>
    </div>
  );
};

// Card Title
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-gray-900 dark:text-white font-bold tracking-wide mt-2 text-lg",
        className
      )}
    >
      {children}
    </h4>
  );
};
