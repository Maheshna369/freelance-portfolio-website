import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaDiscord,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
  FaServicestack,
  FaUser,
} from "react-icons/fa6";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-neutral-600 dark:text-neutral-400 pt-12">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {/* About Me */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-bold text-lg mb-4">
            About Me
          </h2>
          <p className="text-sm leading-relaxed">
            I’m Mahesh Nayak — a MERN + Next.js Developer & UI/UX Designer. I
            create high-performance, visually appealing, and conversion-driven
            websites that help businesses scale faster.
          </p>
        </div>

        {/* Quick Links */}
        <div className="hidden lg:inline-block">
          <h2 className="text-neutral-900 dark:text-white font-bold text-lg mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
              <FaHome /> <Link href="/#home">Home</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
              <FaProjectDiagram /> <Link href="/#portfolio">Portfolio</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
              <FaServicestack /> <Link href="/#services">Services</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
              <FaUser /> <Link href="/#skills">Skills</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
              <FaArrowRight /> <Link href="/#experience">Experience</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
              <FaEnvelope /> <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-bold text-lg mb-4">
            Follow Me
          </h2>
          <div className="flex flex-wrap gap-4 text-2xl">
            <a
              href="https://linkedin.com/in/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 dark:hover:text-pink-400 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://discord.gg/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:scale-110"
            >
              <FaDiscord />
            </a>
            <a
              href="https://x.com/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 dark:hover:text-gray-200 transition transform hover:scale-110"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-bold text-lg mb-4">
            Contact
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
              <FaEnvelope />
              <a href="mailto:maheshnayak9639@gmail.com">
                maheshnayak9639@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
              <FaPhone /> <a href="tel:+918658533493">+91 86585 33493</a>
            </li>
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              <FaArrowRight /> Chatrapur, Ganjam, Odisha, India
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-neutral-300 dark:border-neutral-800 pt-6 text-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-500">
        © {new Date().getFullYear()} Mahesh Nayak. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
