import Image from "next/image";
import React from "react";
import LogoImage from "../../Assets/VintageDealersLogo.png";

const PreLoader = () => {
  return (
    <div className="bg-white left-0 right-0 fixed h-[100vh] w-[100vw] z-40 flex justify-center items-center ">
      <div className="animate-loadershake">
        <Image
          src={LogoImage}
          width={100}
          height={100}
          alt="loader"
        ></Image>
      </div>
    </div>
  );
};

export default PreLoader;
