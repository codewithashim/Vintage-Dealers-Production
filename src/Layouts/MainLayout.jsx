import React from "react";
import Footer from "../Components/Footer/Footer";
import HomeNav from "../Components/Navbar/HomeNav/HomeNav";
import TopNav from "../Components/Navbar/TopNav/TopNav";

const MainLayout = ({ children }) => {
  return (
    <main>
      <TopNav />
      <HomeNav />
      <hr />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default MainLayout;
