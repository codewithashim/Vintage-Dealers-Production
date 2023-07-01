import React from "react";
import Hero from "../Hero/Hero";
import HomeBlogs from "../HomeBlogs/HomeBlogs";
import HomeInfoCard from "../HomeInfoCard/HomeInfoCard";
import ExploreMore from "../ProductBanner/ExploreMore/ExploreMore";
import TrandingArriveProduct from "../TrandingArriveProduct/TrandingArriveProduct/TrandingArriveProduct";
import PopularCategory from "../PopualrBrand/PopualrBrand";
import BrandBanner from "../BrandBanner/BrandBanner";
import SearviceAndBestShelling from "../SearviceAndBestShelling/SearviceAndBestShelling";


const Home = () => {
  return (
    <main>
      <Hero />
      <HomeInfoCard />
      <PopularCategory/>
      <SearviceAndBestShelling/>
      <ExploreMore />
      <TrandingArriveProduct/>
      <HomeBlogs/>
      <BrandBanner />
    </main>
  );
};

export default Home;
