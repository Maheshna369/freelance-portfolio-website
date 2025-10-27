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
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 rounded-3xl z-10 bg-neutral-200 dark:bg-slate-800/[0.8]"
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
            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title + Skills */}
            <div className="p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <CardTitle>{item.title}</CardTitle>
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
              <CardDescription>{item.description}</CardDescription>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 p-4 mt-auto">
              {item.liveDemo && (
                <Link href={item.liveDemo} target="_blank">
                  <button className="flex-1 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-500 transition">
                    Live Demo
                  </button>
                </Link>
              )}
              {item.github && (
                <Link href={item.github} target="_blank">
                  <button className="flex-1 py-2 rounded border border-white text-white font-medium hover:bg-white hover:text-black transition">
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

// Card
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "flex flex-col rounded-2xl h-full w-full overflow-hidden bg-gradient-to-b from-gray-900/5 to-gray-900/10 dark:from-gray-800/30 dark:to-gray-900/40 border border-transparent dark:border-white/[0.15] group-hover:border-blue-500 shadow-md hover:shadow-lg transition-all relative z-20",
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
  <h4
    className={cn(
      "text-lg md:text-xl font-bold text-zinc-100 dark:text-white",
      className
    )}
  >
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
  <p
    className={cn(
      "text-sm text-zinc-400 dark:text-zinc-300 mt-2 leading-relaxed",
      className
    )}
  >
    {children}
  </p>
);
