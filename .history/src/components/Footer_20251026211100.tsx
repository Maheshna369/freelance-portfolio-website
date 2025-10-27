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
  FaGlobe,
 
} from "react-icons/fa6";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-600 dark:text-neutral-400 pt-14 pb-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 sm:px-10">
        {/* About */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-bold text-lg mb-4">
            About Me
          </h2>
          <p className="text-sm leading-relaxed max-w-xs">
            I’m <span className="font-semibold text-indigo-600 dark:text-indigo-400">Mahesh Nayak</span> — a MERN + Next.js Developer & UI/UX Designer. I build
            high-performance, conversion-driven digital experiences that turn visitors
            into customers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-bold text-lg mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", href: "/#home", icon: <FaHome /> },
              { name: "Portfolio", href: "/#portfolio", icon: <FaProjectDiagram /> },
              { name: "Services", href: "/#services", icon: <FaServicestack /> },
              { name: "Skills", href: "/#skills", icon: <FaUser /> },
              { name: "Experience", href: "/#experience", icon: <FaArrowRight /> },
              { name: "Contact", href: "/#contact", icon: <FaEnvelope /> },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 hover:translate-x-1"
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Freelance */}
        <div>
          <h2 className="text-neutral-900 dark:text-white font-bold text-lg mb-4">
            Follow Me
          </h2>
          <div className="flex flex-wrap gap-4 text-2xl mb-6">
            {[
              { icon: <FaLinkedin />, href: "https://linkedin.com/in/maheshnayak", color: "hover:text-indigo-600 dark:hover:text-indigo-400" },
              { icon: <FaGithub />, href: "https://github.com/maheshnayak", color: "hover:text-gray-800 dark:hover:text-gray-200" },
              { icon: <FaInstagram />, href: "https://instagram.com/maheshnayak", color: "hover:text-pink-600 dark:hover:text-pink-400" },
              { icon: <FaFacebook />, href: "https://facebook.com/maheshnayak", color: "hover:text-blue-600 dark:hover:text-blue-400" },
              { icon: <FaDiscord />, href: "https://discord.gg/maheshnayak", color: "hover:text-indigo-500 dark:hover:text-indigo-400" },
              { icon: <FaXTwitter />, href: "https://x.com/maheshnayak", color: "hover:text-neutral-800 dark:hover:text-neutral-300" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition transform hover:scale-110`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <h3 className="text-neutral-900 dark:text-white font-semibold text-md mb-3">
            Hire Me On
          </h3>
          <div className="flex flex-col space-y-3 text-sm">
            {[
              { name: "Fiverr", href: "https://www.fiverr.com/maheshnayak", color: "hover:text-green-600 dark:hover:text-green-400" },
              { name: "Upwork", href: "https://www.upwork.com/freelancers/~maheshnayak", color: "hover:text-emerald-600 dark:hover:text-emerald-400" },
              { name: "Toptal", href: "https://www.toptal.com/resume/maheshnayak", color: "hover:text-blue-600 dark:hover:text-blue-400" },
              { name: "Freelancer", href: "https://www.freelancer.com/u/maheshnayak", color: "hover:text-sky-600 dark:hover:text-sky-400" },
            ].map((site) => (
              <a
                key={site.name}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 ${site.color} transition-all duration-200 hover:translate-x-1`}
              >
                <FaGlobe className="group-hover:rotate-12 transition-transform duration-300" />
                {site.name}
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
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              <FaEnvelope />
              <a href="mailto:maheshnayak9639@gmail.com">
                maheshnayak9639@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              <FaPhone />
              <a href="tel:+918658533493">+91 86585 33493</a>
            </li>
            <li className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              <FaArrowRight /> Chatrapur, Ganjam, Odisha, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-500">
        © {new Date().getFullYear()} <span className="font-medium text-neutral-700 dark:text-neutral-300">Mahesh Nayak</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
