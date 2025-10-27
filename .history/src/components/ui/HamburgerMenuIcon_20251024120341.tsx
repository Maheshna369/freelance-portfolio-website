"use client";
import { motion } from "framer-motion";

const MenuFunnelIcon = ({ open }: { open: boolean }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-[5px] cursor-pointer group">
      <motion.span
        animate={{
          width: open ? "24px" : "32px",
          rotate: open ? 45 : 0,
          y: open ? 6 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="block h-[3px] bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full origin-left shadow-[0_0_6px_rgba(56,189,248,0.8)] group-hover:shadow-[0_0_12px_rgba(56,189,248,1)] transition-shadow duration-300"
      />
      <motion.span
        animate={{
          width: open ? 0 : "24px",
          opacity: open ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="block h-[3px] bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full shadow-[0_0_6px_rgba(56,189,248,0.8)] group-hover:shadow-[0_0_12px_rgba(56,189,248,1)] transition-shadow duration-300"
      />
      <motion.span
        animate={{
          width: open ? "24px" : "16px",
          rotate: open ? -45 : 0,
          y: open ? -6 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="block h-[3px] bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full origin-left shadow-[0_0_6px_rgba(56,189,248,0.8)] group-hover:shadow-[0_0_12px_rgba(56,189,248,1)] transition-shadow duration-300"
      />
    </div>
  );
};

export default MenuFunnelIcon;
