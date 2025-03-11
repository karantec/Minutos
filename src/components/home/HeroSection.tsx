"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const backgroundImages = ["/images/2.png", "/images/4.png", "/images/6.png"];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center">
      {/* Sliding Background Images */}
      <div className="absolute top-0 w-full h-[80%] overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentBgIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute top-[60%] w-full text-center text-white z-10">
        <h1 className="text-5xl font-bold drop-shadow-lg">Welcome to Minitos</h1>
        <p className="text-lg mt-4 drop-shadow-md">
          Experience the best services with us. Join now!
        </p>
        <Link href="/signup-form">
          <button className="mt-6 bg-red-400 bg-opacity-30 backdrop-blur-lg hover:bg-red-700 hover:bg-opacity-50 text-white text-xl px-6 py-3 rounded-full transition border border-white/20">
            Get Started
          </button>
        </Link>
      </div>

      {/* Sliding Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBgIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentBgIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
