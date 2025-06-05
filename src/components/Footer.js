import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        {/* Left: Name and Year */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Akanksha Kumari. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center space-x-6 text-lg">
          <a
            href="mailto:hapychaudhary123spj@gmail.com"
            className="hover:text-indigo-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Akanksha9033"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/akanksha-kumari-a45826231/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
