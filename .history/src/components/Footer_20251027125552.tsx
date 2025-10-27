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
import { GiSkills } from "react-icons/gi";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import FiverrLogo from "@/assets/platforms/fiverr.svg";
import UpworkLogo from "@/assets/platforms/upwork.svg";
import FreelancerLogo from "@/assets/platforms/freelancer.svg";
import ToptalLogo from "@/assets/platforms/toptal.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-neutral-600 dark:text-neutral-400 pt-12 pb-6">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* About Me */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-semibold text-lg mb-4">
            About Me
          </h2>
          <p className="text-sm leading-relaxed">
            I’m Mahesh Nayak — a MERN + Next.js Developer. I build sleek,
            high-performance, and conversion-focused digital experiences that
            help brands grow fast and look premium.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-semibold text-lg mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3 text-sm">
            {[
              { icon: <FaHome />, label: "Home", href: "/#home" },
              {
                icon: <FaProjectDiagram />,
                label: "Portfolio",
                href: "/#portfolio",
              },
              {
                icon: <FaServicestack />,
                label: "Services",
                href: "/#services",
              },
              {
                icon: <GiSkills />,
                label: "Skills",
                href: "/#skills-experience",
              },
              // {
              //   icon: <FaArrowRight />,
              //   label: "Experience",
              //   href: "/#experience",
              // },
              { icon: <FaEnvelope />, label: "Contact", href: "/#contact" },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer"
              >
                {item.icon}
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Freelance Links */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-semibold text-lg mb-4">
            Follow Me
          </h2>
          <div className="flex flex-wrap gap-4 text-2xl mb-6">
            {[
              {
                href: "https://www.linkedin.com/in/mahesh-nayak-53b653249",
                icon: <FaLinkedin />,
                color: "hover:text-[#0077B5]",
              },
              {
                href: "https://github.com/Maheshna369",
                icon: <FaGithub />,
                color: "hover:text-gray-900 dark:hover:text-gray-200",
              },
              {
                href: "https://www.instagram.com/growthwithmaphy",
                icon: <FaInstagram />,
                color: "hover:text-pink-500",
              },
              {
                href: "https://www.facebook.com/maheshna369",
                icon: <FaFacebook />,
                color: "hover:text-blue-600",
              },
              {
                href: "https://discord.gg/webdevelopermahesh",
                icon: <FaDiscord />,
                color: "hover:text-indigo-500",
              },
              {
                href: "https://x.com/maheshna_369",
                icon: <FaXTwitter />,
                color: "hover:text-neutral-700 dark:hover:text-neutral-300",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition-transform transform hover:scale-110`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Freelance Platforms */}
          <h3 className="text-neutral-900 dark:text-white font-semibold text-md mb-3">
            Hire Me On
          </h3>
          <div className="flex flex-wrap gap-4 items-center">
            {[
              {
                name: "Fiverr",
                href: "https://www.fiverr.com/s/6Y6BxDX",
                Logo: FiverrLogo,
                color: "hover:brightness-125",
              },
              {
                name: "Upwork",
                href: "https://www.upwork.com/freelancers/~019c4e8bbe1881f9cd?mp_source=share",
                Logo: UpworkLogo,
                color: "hover:brightness-125",
              },
              {
                name: "Toptal",
                href: "https://www.toptal.com/resume/maheshnayak",
                Logo: ToptalLogo,
                color: "hover:brightness-125",
              },
              {
                name: "Freelancer",
                href: "https://www.freelancer.com/u/maheshnayak",
                Logo: FreelancerLogo,
                color: "hover:brightness-125",
              },
            ].map(({ name, href, Logo, color }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${color} transition-transform transform hover:scale-105`}
              >
                <Logo className="w-6 h-6 text-gray-900 dark:text-white" />
                {/* <span className="text-sm">{name}</span> */}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-semibold text-lg mb-4">
            Contact
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              <FaEnvelope />
              <a href="mailto:maheshnayak9639@gmail.com">
                maheshnayak9639@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
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
        © {new Date().getFullYear()} Mahesh Nayak. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
