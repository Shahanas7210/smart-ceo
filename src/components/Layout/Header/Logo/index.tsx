import { color } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  const logoVariable = [
    {
      text: "c",
      color: "#006cb0",
      colorText: "text-white",
    },
    {
      text: "e",
      color: "#8f2b8c",
      colorText: "text-white",
    },
    {
      text: "o",
      color: "#29a084",
      colorText: "text-white",
    },
  ];

  return (
    <Link
      href="/"
      className="flex items-center text-black dark:text-white text-2xl font-semibold gap-4"
    >
      {/* <Image
        src="/images/logo/logo.png"
        alt="logo"
        width={160}
        height={40}
        // style={{ width: 'auto', height: 'auto' }}
        quality={100}
      /> */}
      <div className=" text-center   gap-4  w-40 h-16">
        <h1 className="text-[#bb8528]">SMART</h1>
        <div className="flex justify-between ">
          {logoVariable.map((item, index) => {
            return (
              <div
                key={index}
                className={`bg-[${item.color}] ${item.colorText} size-10 flex items-center justify-center `}
              >
                <h1 className="capitalize">{item.text}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default Logo;
