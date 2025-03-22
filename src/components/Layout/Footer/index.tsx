import React, { FC } from "react";
import { Icon } from "@iconify/react"; // Import Icon
import { headerData } from "../Header/Navigation/menuData";
import Logo from "../Header/Logo";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-5 lg:gap-20 md:gap-6 sm:gap-12 gap-6 pb-16">
          <div className="col-span-2">
            <Logo />
            <p className="text-xs font-medium text-grey dark:text-white/50 mt-5 mb-16 max-w-70%">
              Kerala's First Experiential Learning & Practical Solution Providing Platform Through 50+ Experts
            </p>
            <div className="flex gap-6 items-center">
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                <Icon icon="fa6-brands:facebook-f" width="16" height="16" className="group-hover:text-white text-black" />
              </Link>
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                <Icon icon="fa6-brands:instagram" width="16" height="16" className="group-hover:text-white text-black" />
              </Link>
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                <Icon icon="fa6-brands:x-twitter" width="16" height="16" className="group-hover:text-white text-black" />
              </Link>
            </div>
          </div>

          <div className="">
            <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">More</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href}
                    className="text-black/70 dark:text-white/70 dark:hover:text-primary hover:text-primary text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-grey/15 dark:border-white/15 py-10 flex justify-between items-center">
          <p className="text-sm text-black/70 dark:text-white/70">
            @2025 - All rights reserved Zedbrand Business Solutions
          </p>

          <div className="">
            <Link href="#" className="text-sm text-black/70 dark:text-white/70 px-5 border-r border-grey/15 dark:border-white/15 hover:text-primary dark:hover:text-primary">Privacy policy</Link>
            <Link href="#" className="text-sm text-black/70 dark:text-white/70 px-5 hover:text-primary dark:hover:text-primary">Terms & conditions</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-8 right-8 z-[999]">
        <a
          href="https://wa.me/1234567890" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <div className="flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition duration-300 ease-in-out">
            <Icon icon="fa6-brands:whatsapp" width="24" height="24" />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
