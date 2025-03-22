"use client";
import Image from "next/image";

const Cook = () => {
  return (
    <section id="cook-section" className="relative py-16" id="about-section">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <Image
              src="/images/cook/cook1.png"
              alt="Chef cooking"
              width={450}
              height={500}
              className="max-w-full h-auto"
            />
          </div>
          
          {/* Right Content */}
          <div className="lg:col-span-6">
            <p className="text-primary text-lg font-semibold uppercase tracking-wide mb-4">
              About Us
            </p>
            <p className="text-black/60 dark:text-white/60 text-lg mb-6">
              At <strong>Smart CEO</strong>, we are more than just a business solutions provider—we are your strategic partners in growth. In today’s rapidly evolving business landscape, companies face complex challenges that require practical, innovative, and result-driven solutions.
            </p>
            <p className="text-black/60 dark:text-white/60 text-lg mb-6">
              Our mission is simple: bridge the gap between businesses and the expertise they need to thrive. By fostering collaboration between entrepreneurs, industry leaders, and solution providers, we help businesses overcome obstacles, seize new opportunities, and unlock their full potential.
            </p>
            <p className="text-black/60 dark:text-white/60 text-lg">
              We don’t just solve business problems; we create lasting value that drives success now and for the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cook;
