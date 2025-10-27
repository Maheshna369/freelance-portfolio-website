"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContextProvider";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
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
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={item.title}
          className="relative group flex flex-col w-full h-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Hover Background */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 rounded-3xl z-10 bg-white/30 dark:bg-black/30"
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

          <Card className="flex flex-col h-full justify-between">
            {/* Project Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-xl shadow-sm group-hover:shadow-lg transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title + Skills */}
            <div className="p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-black dark:text-white">
                  {item.title}
                </CardTitle>
                {item.skills && (
                  <div className="flex gap-2">
                    {item.skills.map((SkillIcon, i) => (
                      <SkillIcon
                        key={i}
                        className={cn(
                          "w-6 h-6 transition-transform duration-200 hover:scale-110",
                          theme === "dark" ? "fill-white" : "fill-black"
                        )}
                      />
                    ))}
                  </div>
                )}
              </div>
              <CardDescription className="text-gray-800 dark:text-gray-300">
                {item.description}
              </CardDescription>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 p-4 mt-auto">
              {item.liveDemo && (
                <Link href={item.liveDemo} target="_blank">
                  <button className="flex-1 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-500 hover:shadow-lg transition-all duration-200">
                    Live Demo
                  </button>
                </Link>
              )}
              {item.github && (
                <Link href={item.github} target="_blank">
                  <button className="flex-1 py-2 rounded border border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200">
                    GitHub
                  </button>
                </Link>
              )}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

// Card wrapper
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "flex flex-col rounded-2xl h-full w-full overflow-hidden bg-white dark:bg-gray-900 border border-transparent dark:border-white/20 group-hover:border-blue-500 shadow-md hover:shadow-xl transition-all relative z-20",
      className
    )}
  >
    {children}
  </div>
);

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <h4 className={cn("text-lg md:text-xl font-bold tracking-tight", className)}>
    {children}
  </h4>
);

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p className={cn("text-sm mt-1 leading-relaxed", className)}>{children}</p>
);
