import React from "react";
import { motion } from "framer-motion";
import trackingData from "../assets/data/trackingData"; // Import JSON data

export default function Tracking() {
  return (
    <div className="text-white py-12 px-4 md:px-10">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Section (Text + Buttons) - animates in from the right */}
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left px-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-2xl outfit sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Start Tracking the Truth in{" "}
            <span className="text-blue-500">Crypto</span> Join{" "}
            <span className="text-blue-500">BlocFans</span> Today!
          </h2>
          <p className="text-base sm:text-lg outfit text-gray-200 md:text-xl font-medium mt-4 max-w-2xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia.
          </p>

          {/* Buttons - Fetched from JSON */}
          <div className="mt-6 flex flex-col outfit sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all w-full sm:w-auto">
              {trackingData.buttons[0].text}
            </button>
            <button className="border-2 border-blue-700 py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all w-full sm:w-auto">
              {trackingData.buttons[1].text}
            </button>
          </div>
        </motion.div>

        {/* Right Section (Images) - animates in from the left */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center relative mt-10 lg:mt-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Frame Image - Positioned on top */}
          <img
            src={trackingData.images.frame} // Frame image from JSON
            alt="Frame"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-56 md:h-20 sm:w-40 md:w-56 lg:w-56 animate-float"
          />
          
          {/* Bitcoin Image - Positioned below */}
          <img
            src={trackingData.images.bitcoin} // Bitcoin image from JSON
            alt="Bitcoin"
            className="relative w-64 sm:w-52 md:w-60 lg:w-72 xl:w-80"
          />
        </motion.div>
      </div>
    </div>
  );
}
