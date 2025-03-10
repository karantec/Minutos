import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-12 bg-gradient-to-b from-red-50 to-green-100">
      {/* Delivery bike image */}
      <div className="flex justify-center mb-12">
        <Image 
          src="/images/about-us.png" 
          alt="Minutos Delivery Bike" 
          width={480} 
          height={160} 
          className="h-auto" 
        />
      </div>

      {/* Mission and introduction */}
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-gray-800 leading-relaxed">
          At Minutos, our mission is to transform the local commerce landscape by empowering Kirana stores and vegetable shops to thrive in the fast-paced world of quick deliveries. Designed for ultra-fast delivery times—typically within 10 to 20 minutes—we aim to bridge the gap between modern consumer expectations and the traditional retail experience.
        </p>

        <p className="text-gray-800 leading-relaxed">
          Recently, we secured pre-seed funding from renowned investors, enabling us to strengthen our operational infrastructure and technology. This funding will help us stay ahead of the curve and continue to innovate in the realm of local deliveries. What sets Minutos apart is our commitment to fostering meaningful emotional connections with both store owners and customers, making us more than just a delivery platform—we're building a community-driven ecosystem.
        </p>

        <p className="text-gray-800 leading-relaxed">
          Although we're still in our early stages, the excitement surrounding Minutos is palpable. Customers and store owners alike recognize the immense value of a platform that seamlessly blends technology with a deep commitment to local communities. With upcoming features like AI-driven ordering and a frictionless shopping experience, we are poised to revolutionize the way India shops locally.
        </p>

        <p className="text-gray-800 leading-relaxed text-gray-400">
          Minutos is more than just a quick-commerce platform—it's a movement to support and uplift local businesses in an ever-evolving market. We're here to ensure that Kirana stores and vegetable shops not only survive but thrive, creating a sustainable and inclusive future for local retail.
        </p>
      </div>
    </div>
  );
};

export default About;