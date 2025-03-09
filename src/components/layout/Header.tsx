"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-kirana-green text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image 
              src="/images/kiranapro-logo.svg" 
              alt="KiranaPro Logo" 
              fill
              className="object-contain"
            />
          </div>
          <div>
            <span className="font-bold text-xl">Kirana</span>
            <span className="text-xl">Pro</span>
            <p className="text-xs">India's Neighborhood Shopping App</p>
          </div>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/about-us" className="hover:underline">
            About us
          </Link>
          <div className="relative w-16 h-8">
            <Image 
              src="/images/ondclogo.svg" 
              alt="ONDC Logo" 
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;