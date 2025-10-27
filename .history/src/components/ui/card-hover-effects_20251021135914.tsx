"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
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
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={item.title}
          className="relative group block w-full h-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          {/* Hover Background */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                className="absolute inset-0 h-full w-full rounded-3xl z-10 bg-gradient-to-tr from-indigo-200/50 via-pink-200/40 to-yellow-200/30 dark:from-indigo-800/60 dark:via-pink-700/50 dark:to-yellow-600/40"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.1 } }}
              />
            )}
          </AnimatePresence>

          {/* Card */}
          <Card className="overflow-hidden flex flex-col hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300">
            {/* Project Image */}
            <div className="relative w-full h-52 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/10 dark:bg-white/10 group-hover:bg-black/20 dark:group-hover:bg-white/20 transition-all duration-300 rounded-xl" />
            </div>

            {/* Title & Description */}
            <div className="p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-900 dark:text-white">
                  {item.title}
                </CardTitle>

                {/* Skill Logos */}
                {item.skills && item.skills.length > 0 && (
                 <div className="flex gap-2 items-center">
  {item.skills?.slice(0, 4).map((SkillIcon, i) => (
    <SkillIcon
      key={i}
      className={cn(
        "w-6 h-6 transition-transform duration-200 hover:scale-125",
        theme === "dark" ? "fill-white" : "fill-black"
      )}
    />
  ))}

  {item.skills && item.skills.length > 4 && (
    <span
      className={cn(
        "text-xs font-semibold ml-1",
        theme === "dark" ? "text-white" : "text-black"
      )}
    >
      +{item.skills.length - 4}
    </span>
  )}
</div>

                )}
              </div>

              <CardDescription className="text-gray-700 dark:text-gray-300">
                {item.description}
              </CardDescription>
            </div>

            {/* Buttons */}
            <div className="w-full flex flex-row justify-between items-center gap-3 px-4 pb-4 mt-auto">
              {item.liveDemo && (
                <Link href={item.liveDemo} target="_blank">
                  <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
                    Live Demo
                  </button>
                </Link>
              )}
              {item.github && (
                <Link href={item.github} target="_blank">
                  <button className="flex-1 py-2 rounded-lg border border-gray-700 dark:border-gray-300 text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300">
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
}) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl h-full w-full bg-white dark:bg-gray-900 border border-transparent dark:border-gray-700 relative z-20",
        className
      )}
    >
      {children}
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
}) => (
  <h4
    className={cn(
      "text-lg font-extrabold tracking-wide text-gray-900 dark:text-white",
      className
    )}
  >
    {children}
  </h4>
);

// Card Description
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p
    className={cn(
      "mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
      className
    )}
  >
    {children}
  </p>
);
