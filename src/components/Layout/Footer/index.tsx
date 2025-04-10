import React, { FC } from "react";
import { Icon } from "@iconify/react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "../Header/Logo";
import Link from "next/link";

const Footer: FC = () => {
  const socialMedia = [
    {
      icon: "fa6-brands:instagram",
      link: "https://www.instagram.com/smart.ceo_/",
    },
    {
      icon: "fa6-brands:facebook-f",
      link: "https://www.facebook.com/profile.php?id=61553129651975",
    },
  ];
  return (
    <footer className="pt-16 bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-16">
          {/* Logo and description */}
          <div className="lg:col-span-2 col-span-1">
            <Logo />
            <p className="text-sm font-medium text-grey dark:text-white/50 mt-5 mb-6 max-w-[90%]">
              Kerala's First Experiential Learning & Practical Solution
              Providing Platform Through 50+ Experts
            </p>
            <p className="text-sm font-medium text-grey dark:text-white/50 mt-5 mb-6 max-w-[90%]">
              Phone Number: 96561 10112, 96568 20000
            </p>
            <div className="flex gap-4 items-center flex-wrap">
              {socialMedia.map((item, index) => {
                return (
                  <Link
                    target="_blank"
                    href={item.link}
                    key={index}
                    className="group bg-white hover:bg-primary rounded-full shadow-xl p-3"
                  >
                    <Icon
                      icon={item.icon}
                      width="16"
                      height="16"
                      className="group-hover:text-white text-black"
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-black dark:text-white mb-5 font-semibold text-xl">
              More
            </h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-3">
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

          {/* Embedded Map */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[300px] overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1868228797453!2d75.83119092486415!3d11.24766318893121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6597c304c1f3b%3A0xbb7abc23c1ea8a!2sHiLITE%20Business%20Park!5e0!3m2!1sen!2sin!4v1744089176731!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-grey/15 dark:border-white/15 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-black/70 dark:text-white/70">
            @2025 - All rights reserved Zedbrand Business Solutions
          </p>
          {/* <div className="flex gap-4 flex-wrap">
            <Link href="#" className="text-sm text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary">
              Privacy policy
            </Link>
            <span className="hidden md:inline-block border-l border-grey/15 dark:border-white/15"></span>
            <Link href="#" className="text-sm text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary">
              Terms & conditions
            </Link>
          </div> */}
        </div>
      </div>

      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-8 right-8 z-[999]">
        <a
          href="https://wa.me/9656820000"
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
