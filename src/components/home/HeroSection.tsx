"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const slides = [
    {
      image: "/images/1.png",
      title: "OTT PLATFORMS AT THE CHEAPEST PRICE!",
      subtitle: "Stream your favorite content with premium subscriptions",
    },
    {
      image: "/images/2.png",
      title: "Minutos: Freshness Delivered, Fast and Local.",
      subtitle: "From your local stores to your doorstep in minutes.",
    },
    {
      image: "/images/3.png",
      title: "Minutos: Freshness Delivered, Fast and Local.",
      subtitle: "From your local stores to your doorstep in minutes.",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-96">
      {/* Slides Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
              <div className="max-w-2xl">
                <h1 className="text-white text-2xl sm:text-md md:text-4xl lg:text-5xl font-bold mb-4">
                  {slide.title || "OTT PLATFORMS AT THE CHEAPEST PRICE!"}
                </h1>
                <p className="text-white text-lg sm:text-md md:text-2xl">
                  {slide.subtitle || "Stream your favorite content with premium subscriptions"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sliding Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlideIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;