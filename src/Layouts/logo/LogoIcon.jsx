import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../Assets/VintageDealersLogo.png";

const LogoIcon = () => {
  return (
    <Link href="/">
      <Image src={LogoDark} alt={LogoDark} width={300} height={100}/>
    </Link>
  );
};

export default LogoIcon;
