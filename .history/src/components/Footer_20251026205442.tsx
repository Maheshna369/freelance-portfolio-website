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
} from "react-icons/fa6"; // use react-icons/fa6 for latest brands
import { FaHome, FaProjectDiagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  text-gray-400 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Me */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">About Me</h2>
          <p className="text-sm leading-relaxed">
            I’m Mahesh Nayak, a MERN + Next.js developer & UI/UX designer. I
            build fast, responsive, and conversion-focused websites that help
            businesses grow digitally.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm ">
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
          <div className="flex flex-wrap gap-4 text-2xl">
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
              href="https://www.instagram.com/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://discord.gg/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition transform hover:scale-110"
            >
              <FaDiscord />
            </a>
            <a
              href="https://x.com/maheshnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition transform hover:scale-110"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <FaEnvelope />
              <a href="mailto:maheshnayak9639@gmail.com">
                maheshnayak9639@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <FaPhone /> <a href="tel:+918658533493">+91 86585 33493</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaArrowRight /> Chatrapur, Ganjam, Odisha, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mahesh Nayak. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
