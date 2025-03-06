import React from "react";
import Header from "../layout/Header";
import Dashboard from "../components/Dashboard";
import Keyfeatures from "../components/Keyfeatures"; // Import Keyfeatures
import Howitworks from "../components/Howitworks";
import Winner from "../components/Winner";

import Warriors from "../components/Warriors";
import Tracking from "../components/Tracking";
import Footer from "../layout/Footer";

export default function LandingPage() {
  return (
    <div className=" bg-[#000618] relative">
      {/* Gradient Effect - Smooth Merge with Background */}
      <div
        className="absolute top-0 left-0 w-full h-[100vh] z-0"
        style={{
          background: `linear-gradient(to bottom, rgba(1, 148, 254, 0.4), rgba(1, 148, 254, 0.2), rgba(0, 6, 24, 0.8), rgba(0, 6, 24, 1))`,
        }}
      ></div>

      <div className="relative z-10">
        {/* Header Component */}
        <Header />

        {/* Dashboard Section */}
        <Dashboard />

        {/* Key Features Section */}
        <Keyfeatures />

        <Howitworks />

        <Winner />

        <Warriors />

        <Tracking />

        <Footer />
      </div>
    </div>
  );
}
