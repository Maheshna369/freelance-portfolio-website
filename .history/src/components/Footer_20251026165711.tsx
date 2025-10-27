import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Branding / name */}
        <div className="text-sm font-semibold">Mahesh Nayak</div>

        {/* Optional small navigation */}
        <div className="flex gap-6 mt-4 md:mt-0 text-sm">
          <a href="#portfolio" className="hover:text-white transition">
            Portfolio
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
        </div>

        {/* Socials / subtle links */}
        <div className="flex gap-4 mt-4 md:mt-0 text-xl">
          <a
            href="https://linkedin.com/in/maheshnayak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/maheshnayak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://dribbble.com/maheshnayak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Dribbble
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm border-t border-gray-800 pt-4">
        © 2025 Mahesh Nayak. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
