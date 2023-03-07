import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const LandingLayout = () => {
  return (
    <div className="flex">
      <Header />
      <Footer />
      <Outlet />
    </div>
  );
};

export default LandingLayout;
