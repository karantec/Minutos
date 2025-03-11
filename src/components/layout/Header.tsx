"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 transition-all duration-500 ${
        isScrolled ? "bg-red-500 shadow-md py-3" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src="/images/minitos-White.png" alt="Logo" className="h-7 w-auto" />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Menu */}
      <nav
        className={`absolute top-16 left-0 w-full  lg:bg-transparent lg:static lg:w-auto transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 max-h-screen py-4" : "opacity-0 max-h-0 overflow-hidden lg:opacity-100 lg:max-h-full lg:py-0"
        } lg:flex`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-6 text-center lg:text-left w-full lg:w-auto">
          {["About"].map((item, index) => (
            <li key={index} className="border-b lg:border-none">
              <Link
                href="/about"
                className="block py-4 px-6 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
