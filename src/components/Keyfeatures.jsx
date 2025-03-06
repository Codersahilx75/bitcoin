import React from "react";
import { motion } from "framer-motion";
import keyfeaturesData from "../assets/data/keyfeaturesData"; // Import Data

export default function Keyfeatures() {
  return (
    <div className="mt-10 md:mt-28 text-center px-4">
      {/* Heading */}
    
       <motion.h3
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }} className="text-2xl outfit sm:text-5xl md:text-5xl font-semibold text-white">
          KEY <span className="text-[#007bff]">FEATURES</span>
          </motion.h3>
        <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }} className="text-gray-300 outfit text-lg sm:text-xl max-w-2xl mx-auto mt-4">
          BlocFans gives you the tools to outsmart scammers and track the smartest money in crypto all in one place.
          </motion.p>
     

      {/* Features Container with Background & Shadow */}
      <div className="mt-10 bg-[#0A1F39] p-5 rounded-xl shadow-md container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {keyfeaturesData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="text-white flex flex-col items-center"
            >
              <img src={feature.img} alt={feature.title} className="w-24 h-24 mb-6" />
              <h4 className="text-2xl outfit font-semibold">{feature.title}</h4>
              <p className="text-gray-300 outfit text-base text-center mt-3 leading-relaxed sm:max-w-[300px] lg:max-w-[250px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
