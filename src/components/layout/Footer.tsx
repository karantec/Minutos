"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kirana-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <div className="relative w-16 h-16">
                <Image 
                  src="/images/kiranapro-logo.svg" 
                  alt="KiranaPro Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/return" className="hover:underline">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/stores" className="hover:underline">
                  Bright Stores
                </Link>
              </li>
              <li>
                <Link href="/merchants" className="hover:underline">
                  Merchants
                </Link>
              </li>
            </ul>
            
            <h3 className="font-semibold text-lg mt-6 mb-4">The Cool</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://instagram.com" className="hover:underline" target="_blank">
                  Insta
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="hover:underline" target="_blank">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="hover:underline" target="_blank">
                  X
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center md:text-left">
          <h2 className="text-6xl font-light opacity-25">kirana pro</h2>
          <p className="mt-6 text-sm">©KiranaPro Software Pvt Ltd. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;