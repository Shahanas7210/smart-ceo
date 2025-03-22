import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
import { FaChartLine, FaSearch, FaLaptopCode, FaUserTie, FaRegLightbulb } from "react-icons/fa";

export const metadata: Metadata = {
  title: "SMART CEO",
  
};

export default function Home() {
  return (
    <main>
       
      <Hero />
      <Cook />
      <Features />
      <Expert />
     
      <div className="text-black/60 dark:text-white/60 py-12 px-6 lg:px-24">
      {/* Our Mission Section */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Purpose</h2>
        <p className="text-lg max-w-3xl mx-auto">
        we are dedicated to delivering innovative solutions that address the unique challenges businesses face today. Our mission is to empower organizations with practical, impactful strategies that drive success—not just in the present, but for the future. We believe that solving business challenges is more than a service; it’s a commitment to creating lasting value here and hereafter.

        </p>
      </section>

      {/* Our Vision Section */}
      <section className="relative text-center mb-16">
        <h2 className="text-4xl font-bold text-green-600 mb-4">Our Vision</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
        Our vision is to build a dynamic and practical ecosystem that bridges the gap between solution providers and solution seekers. With a special focus on entrepreneurs, we aim to foster a collaborative environment where ideas thrive, resources are accessible, and growth is achievable. By connecting those who innovate with those who need answers, we’re shaping a future where every business can flourish
        </p>
        {/* <div className="flex justify-center">
          <img 
            src="/images/vision.jpg" 
            alt="Network of entrepreneurs and solution providers" 
            className="rounded-lg shadow-lg w-full max-w-3xl" 
          />
        </div> */}
      </section>

      {/* Our Services Section */}
      <section className="text-center  " id="service-section" >
        <h2 className="text-4xl font-bold text-purple-600 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black rounded-lg shadow-lg flex flex-col items-center">
            <FaChartLine className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Business Consulting</h3>
            <p className="text-gray-600">Expert guidance to streamline operations and improve efficiency.</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black rounded-lg shadow-lg flex flex-col items-center">
            <FaSearch className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Market Strategy</h3>
            <p className="text-gray-600">Data-driven insights to position your business for success.</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black rounded-lg shadow-lg flex flex-col items-center">
            <FaLaptopCode className="text-purple-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Digital Transformation</h3>
            <p className="text-gray-600">Helping businesses adapt and grow in the digital age.</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black rounded-lg shadow-lg flex flex-col items-center">
            <FaUserTie className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Entrepreneur Support</h3>
            <p className="text-gray-600">Resources, mentoring, and networking for startup success.</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black rounded-lg shadow-lg flex flex-col items-center">
            <FaRegLightbulb className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Customized Solutions</h3>
            <p className="text-gray-600">Tailored services that align with your business goals.</p>
          </div>
        </div>
      </section>
    </div>
    <Gallery />
    <Newsletter />
    </main>
  );
}
