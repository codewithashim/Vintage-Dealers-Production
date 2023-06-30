import Image from "next/image";
import Link from "next/link";
import React from "react";
import Whatsapp from "../Assets/Icons/whatsapp.png";

const ChatLayout = ({ children }) => {
  const chatlink = `https://wa.me/917034472627`;

  return (
    <main>
      {children}
      <div className="fixed right-0 bottom-0 md:right-3 md:bottom-3 z-50">
        <Link href={chatlink} target="_blank" rel="noopener noreferrer">
          <div className="absolute ">
            <button className="fixed right-3 bottom-3 md:right-8 md:bottom-8 common_btn hover:border-red-500 color-b  rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  width={100}
                  height={100}
                  src={Whatsapp}
                  alt="whatsapp"
                  className="w-14 h-14 md:w-20 md:h-20 ml-2"
                />
              </div>
            </button>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default ChatLayout;
