"use client";
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
import Image from "next/image";

import FiverrLogo from "@/assets/platforms/fiverr.svg";
import UpworkLogo from "@/assets/platforms/upwork.svg";
import FreelancerLogo from "@/assets/platforms/freelancer.svg";
import ToptalLogo from "@/assets/platforms/toptal.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-neutral-700 dark:text-neutral-400 pt-14 pb-8 border-t border-neutral-300 dark:border-neutral-800">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Me */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-bold text-lg mb-4">
            About Me
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            I’m Mahesh Nayak — a MERN + Next.js Developer & UI/UX Designer. I
            build fast, responsive, and conversion-focused websites that help
            businesses grow digitally and dominate their niche.
          </p>
        </div>

        {/* Quick Links */}
        <div>
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

        {/* Social + Freelance Links */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-bold text-lg mb-4">
            Follow Me
          </h2>
          <div className="flex flex-wrap gap-4 text-2xl mb-6">
            {[
              {
                href: "https://linkedin.com/in/maheshnayak",
                icon: <FaLinkedin />,
                hover: "hover:text-blue-600 dark:hover:text-blue-400",
              },
              {
                href: "https://github.com/maheshnayak",
                icon: <FaGithub />,
                hover: "hover:text-gray-900 dark:hover:text-gray-100",
              },
              {
                href: "https://www.instagram.com/maheshnayak",
                icon: <FaInstagram />,
                hover: "hover:text-pink-600 dark:hover:text-pink-400",
              },
              {
                href: "https://facebook.com/maheshnayak",
                icon: <FaFacebook />,
                hover: "hover:text-blue-600 dark:hover:text-blue-400",
              },
              {
                href: "https://discord.gg/maheshnayak",
                icon: <FaDiscord />,
                hover: "hover:text-indigo-500 dark:hover:text-indigo-400",
              },
              {
                href: "https://x.com/maheshnayak",
                icon: <FaXTwitter />,
                hover: "hover:text-gray-700 dark:hover:text-gray-300",
              },
            ].map(({ href, icon, hover }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${hover} transition transform hover:scale-110`}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Freelance Platforms */}
          <h3 className="text-neutral-900 dark:text-white font-semibold text-md mb-3">
            Hire Me On
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            {[
              {
                href: "https://www.fiverr.com/maheshnayak",
                src: FiverrLogo,
                alt: "Fiverr",
              },
              {
                href: "https://www.upwork.com/freelancers/~maheshnayak",
                src: UpworkLogo,
                alt: "Upwork",
              },
              {
                href: "https://www.toptal.com/resume/maheshnayak",
                src: ToptalLogo,
                alt: "Toptal",
              },
              {
                href: "https://www.freelancer.com/u/maheshnayak",
                src: FreelancerLogo,
                alt: "Freelancer",
              },
            ].map(({ href, src, alt }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition transform hover:scale-110"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={80}
                  height={40}
                  className="opacity-80 group-hover:opacity-100 transition"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-bold text-lg mb-4">
            Contact
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer break-all">
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
      <div className="mt-12 text-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-500">
        © {new Date().getFullYear()} Mahesh Nayak. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
