"use client";
import { motion } from "framer-motion";

const MenuFunnelIcon = ({ open }: { open: boolean }) => {
  return (
    <div className="flex flex-col items-end justify-center gap-[5px] cursor-pointer">
      <motion.span
        animate={{
          width: open ? "24px" : "32px",
          rotate: open ? 45 : 0,
          y: open ? 6 : 0,
        }}
        className="block h-[3px] bg-gray-900 dark:bg-white rounded-full origin-left"
        transition={{ duration: 0.3 }}
      />
      <motion.span
        animate={{
          width: open ? 0 : "24px",
          opacity: open ? 0 : 1,
        }}
        className="block h-[3px] bg-gray-900 dark:bg-white rounded-full"
        transition={{ duration: 0.3 }}
      />
      <motion.span
        animate={{
          width: open ? "24px" : "16px",
          rotate: open ? -45 : 0,
          y: open ? -6 : 0,
        }}
        className="block h-[3px] bg-gray-900 dark:bg-white rounded-full origin-left"
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default MenuFunnelIcon;
