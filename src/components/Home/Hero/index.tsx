"use client";
import { AnimatedBackground } from "@/components/animated-background";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home-section" className="bg-gray-50 dark:bg-gray-700 py-40 md:py-32">
      <div className="container mx-auto px-4 max-w-screen-xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Left Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-black dark:text-white leading-tight mb-6">
              Change Entrepreneur, Practically
            </h1>
            <p className="text-black/55 dark:text-white/50 text-lg font-normal mb-8 max-w-2xl mx-auto lg:mx-0">
            Kerala's first Residential, Experiential Learning & Practical Solution Providing Platform Through 50 plus Experts
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="#cook-section"
                className="text-lg font-medium rounded-full text-white py-4 px-6 bg-primary hover:text-primary border border-primary hover:bg-transparent transition-all"
              >
                Get Started
              </Link>
              <Link
                href="#about-section"
                className="text-lg font-medium rounded-full border border-primary text-primary hover:text-white hover:bg-primary py-4 px-6 transition-all"
              >
                Explore Now
              </Link>
            </div>
          </div>
          {/* Right Image */}
          <div className="lg:col-span-6 flex justify-center">
            <Image
              src="/images/hero/banner-image-2.png"
              alt="Hero Banner"
              width={600}
              height={600}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
