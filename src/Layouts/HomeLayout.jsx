import React from "react";
import Footer from "../Components/Footer/Footer";
import TopNav from "../Components/Navbar/TopNav/TopNav";

const HomeLayout = ({ children }) => {
  return (
    <main>
      <TopNav />
      {children}
      <Footer />
    </main>
  );
};

export default HomeLayout;
