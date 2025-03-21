"use client";
import Image from "next/image";
import { FeaturesData } from "@/app/api/data";

const Features = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 max-w-screen-xl" id="about-section">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white mx-auto">
                        Why Choose Smart CEO?
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mt-28">
                    {FeaturesData.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black rounded-3xl p-8 text-center"
                        >
                            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-28 h-28 flex justify-center items-center rounded-full bg-white shadow-lg dark:bg-gray-800">
                                <Image src={"/images/features/" + "hello" +( index +1)  + ".jpg"} alt={item.heading} width={80} height={80} />
                            </div>
                            <h3 className="text-xl font-semibold text-black dark:text-white mt-16">
                                {item.heading}
                            </h3>
                            <p className="text-base text-black/60 dark:text-white/60 mt-2">
                                {item.subheading}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;