"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
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
        <Image
          src="/images/minitos-White.png"
          alt="Logo"
          width={100}
          height={40}
        />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Slide-in Mobile Menu from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-red-400 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 lg:static lg:w-auto lg:bg-transparent lg:flex`}
      >
        <nav className="p-6">
          <ul className="flex flex-col lg:flex-row lg:space-x-6">
            <li>
              <Link
                href="/about"
                className="block py-4 px-6 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
