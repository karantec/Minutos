"use client";

import React from "react";
import Link from "next/link";

const EmpoweringCommunities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
          Are you a Kirana?
        </h2>

        <p className="text-xl md:text-2xl text-gray-800 font-medium text-center mt-4">
          Join us and how you're business 10x
        </p>

        <div className="flex justify-center mt-8">
          <Link href="/signup-form">
            <button className="bg-red-400 bg-opacity-30 backdrop-blur-lg hover:bg-red-700 hover:bg-opacity-50 text-white text-xl px-6 py-3 rounded-full transition border border-white/20">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringCommunities;
