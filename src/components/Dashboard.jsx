import React from "react";
import { motion } from "framer-motion";
import dashboardData from "../assets/data/dashboardData"; // Import Data

export default function Dashboard() {
  return (
    <div className="container  mt-10 lg:mt-20 flex items-center justify-center text-white relative">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-36 relative z-10">
        {/* Left Content - Animates from Left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
            {dashboardData.heading} <br />
            <span className="text-blue-500">{dashboardData.subHeading}</span>
          </h1>
          <p className="mt-4 text-gray-300 text-sm sm:text-base">
            {dashboardData.description}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {dashboardData.buttons.map((btn, index) => (
              <button
                key={index}
                className={`${btn.style} px-6 py-3 rounded-md hover:bg-blue-700 font-semibold w-full sm:w-auto`}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right Image Section - Animates from Right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center w-[min(80vw,300px)] aspect-square sm:max-w-[250px] md:max-w-[300px]"
        >
          {/* Background Circle (Largest) */}
          <img
            src={dashboardData.images[0].src}
            alt={dashboardData.images[0].alt}
            className="absolute w-full h-full object-contain filter brightness-100 contrast-100"
          />

          {/* White Circular Border (Medium) with Blend */}
          <img
            src={dashboardData.images[1].src}
            alt={dashboardData.images[1].alt}
            className="absolute w-[80%] h-[80%] object-contain mix-blend-difference opacity-80 brightness-150"
          />

          {/* Bitcoin Logo (Smallest) with Soft Blend & Glow */}
          <img
            src={dashboardData.images[2].src}
            alt={dashboardData.images[2].alt}
            className="absolute w-[50%] h-[50%] object-contain mix-blend-difference opacity-100 brightness-140 filter drop-shadow-lg"
          />

          {/* Extra Images - Responsive Decorative Dots */}
          {[
            { top: "-20%", left: "10%" },
            { top: "-25%", right: "15%" },
            { top: "-15%", left: "25%" },
            { bottom: "-20%", right: "10%" },
            { bottom: "-25%", left: "15%" },
            { bottom: "-15%", right: "25%" },
            { left: "-20%", top: "10%" },
            { left: "-25%", bottom: "15%" },
            { left: "-15%", top: "25%" },
            { right: "-20%", top: "10%" },
            { right: "-25%", bottom: "15%" },
            { right: "-15%", top: "25%" },
          ].map((dot, index) => (
            <img
              key={index}
              src={dashboardData.extraImage}
              alt="Decorative Dots"
              className={`absolute w-[10%] sm:w-[12%] md:w-[20%] object-contain opacity-${
                70 + (index % 3) * 10
              }`}
              style={{
                top: dot.top,
                bottom: dot.bottom,
                left: dot.left,
                right: dot.right,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
