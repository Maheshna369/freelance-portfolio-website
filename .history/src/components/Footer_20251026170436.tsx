import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaArrowRight,
  FaHome,
  FaProjectDiagram,
  FaServicestack,
  FaUser,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Me */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">About Me</h2>
          <p className="text-gray-400 text-sm">
            I’m Mahesh Nayak, a MERN + Next.js developer & UI/UX designer. I
            build modern, responsive websites and apps that help businesses
            grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <FaHome /> <a href="#home">Home</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <FaProjectDiagram /> <a href="#portfolio">Portfolio</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <FaServicestack /> <a href="#services">Services</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <FaUser /> <a href="#about">About</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <FaEnvelope /> <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Follow Me</h2>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://linkedin.com/in/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://dribbble.com/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition transform hover:scale-110"
            >
              <FaDribbble />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <FaEnvelope />{" "}
              <a href="mailto:hello@maheshnayak.com">hello@maheshnayak.com</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <FaPhone /> <a href="tel:+911234567890">+91 12345 67890</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaArrowRight /> Berhampur, Odisha, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © 2025 Mahesh Nayak. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
