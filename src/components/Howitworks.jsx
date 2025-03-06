import React from "react";
import { motion } from "framer-motion";
import workData from "../assets/data/workData"; // Import Data

export default function HowItWorks() {
  return (
    <div className="container text-white mt-10 lg:mt-20">
      {/* Heading */}
      <div className="text-center">
        <motion.h3
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-3xl outfit sm:text-4xl md:text-6xl font-bold"
        >
          HOW IT <span className="text-[#007bff]">WORKS</span>
        </motion.h3>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-gray-400 outfit text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-3"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
        </motion.p>
      </div>

      {/* Steps Section */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto">
        {/* Steps Row */}
        <div className="flex-1 flex flex-col md:flex-row justify-between gap-6 md:gap-8 w-full">
          {workData.steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: index * 0.1 }}
              className={`w-full md:w-1/3 flex flex-col items-start ${
                index === 1 ? "mt-5 md:mt-20" : index === 2 ? "mt-5 md:mt-36" : ""
              }`}
            >
              <div className="border-l-2 border-[#007bff] pl-4">
                <h4 className="text-lg sm:text-xl md:text-3xl outfit font-bold">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm outfit md:text-lg mt-2">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image + Button */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="flex-1 flex flex-col items-center justify-end mt-10 md:mt-0"
        >
          <img
            src={workData.image}
            alt="How it works"
            className="max-w-[400px] sm:max-w-[400px] md:max-w-[400px] w-full object-contain"
          />
          {/* Button under Image */}
          <button className="mt-6 bg-[#007bff] outfit text-white text-sm sm:text-lg font-medium px-3 py-2 sm:px-5 sm:py-3 rounded-lg hover:bg-[#0056b3] transition">
            {workData.buttonText}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
