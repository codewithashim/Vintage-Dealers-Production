import React from "react";
import ExploreBnanner from "@/src/Assets/Banner/ExploreMore.png";
import Image from "next/image";

const ExploreMore = () => {
  return (
    <section className="w-[100%]">
     <Image 
        src={ExploreBnanner}
        width={"100%"}
        height={"100%"}
        alt="Explore More Banner"
        style={{ objectFit: "cover" , width: "100%", height: "100%"}}

      />
    </section>
  );
};

export default ExploreMore;
