import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = ['Home', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">Akanksha</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-indigo-600 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl text-gray-700 cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden bg-white px-6 pt-4 pb-6 shadow-md space-y-4 text-center font-medium">
          {navLinks.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-gray-700 hover:text-indigo-600"
                onClick={toggleNav}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
