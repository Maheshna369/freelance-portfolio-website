import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// HoverEffect Component
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
    liveDemo?: string;
    github?: string;
    skills?: string[]; // new
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          className="relative group block w-full h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Hover Background */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full rounded-3xl z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Card */}
          <Card>
            {/* Image */}
            {item.image && (
              <div className="relative w-full h-48 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Title & Description */}
            <div className="p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <CardTitle>{item.title}</CardTitle>

                {/* Skill logos */}
                {item.skills && item.skills.length > 0 && (
                  <div className="flex gap-2">
                    {item.skills.map((logo, i) => (
                      <Image
                        key={i}
                        src={logo}
                        alt="skill"
                        width={24}
                        height={24}
                        className="rounded-sm text-gray-900 dark:text-white"
                      />
                    ))}
                  </div>
                )}
              </div>

              <CardDescription>{item.description}</CardDescription>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 px-4 pb-4 mt-auto">
              {item.liveDemo && (
                <Link href={item.liveDemo} target="_blank">
                  <button className="flex-1 py-2 rounded bg-blue-600 text-white hover:bg-blue-500 transition">
                    Live Demo
                  </button>
                </Link>
              )}
              {item.github && (
                <Link href={item.github} target="_blank">
                  <button className="flex-1 py-2 rounded border border-white text-white hover:bg-white hover:text-black transition">
                    GitHub
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
        "flex flex-col rounded-2xl h-full w-full overflow-hidden  border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
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
        "text-zinc-100 font-bold tracking-wide mt-4 text-lg",
        className
      )}
    >
      {children}
    </h4>
  );
};

// Card Description
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
