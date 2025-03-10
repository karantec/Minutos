"use client"

import React from 'react';
import Link from 'next/link';

const EmpoweringCommunities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center">
          Are you a Kirana?
        </h2>
        
        <p className="text-xl md:text-2xl font-medium text-center mt-4">
        Join us and how you're business 10x 
        </p>
        
        <div className="flex justify-center mt-8">
        <Link href="/signup-form">
              <button className="bg-red-400 hover:bg-red-700 text-white text-lg px-3 py-1 rounded-full transition">
                Sign up
              </button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringCommunities;