"use client";
import { TopWave } from "@/components/waves";
import Image from "next/image";

const Cook = () => {
  return (
    <section  className="relative py-16" id="about-section">
      
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
            <strong>Smart CEO</strong>  Is a Practical Solution Providing Platform Through 100 Plus Segment Experts, and Associats with Two MBA Colleges, Running A Short Term Residential , Experiential Management Programe at Premium Resorts and MBA Campuses by Utlising 50 plus Segment Expert Brains Especially In Very Important 8 Subjects by Leading Faculties 
            </p>
            <p className="text-black/60 dark:text-white/60 text-lg mb-6">
            
            </p>
            <p className="text-black/60 dark:text-white/60 text-lg">
            
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cook;
