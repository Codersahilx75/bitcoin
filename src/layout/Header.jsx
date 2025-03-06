import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import headerData from "../assets/data/headerData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("join"); // default active button

  return (
    <header className="relative w-full">
      <div className="container flex items-center justify-between py-4 text-white relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src={headerData.logo} alt="BlocFans" className="h-10" />
        </div>

        {/* Toggle Button for Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Search Bar & Buttons (for larger screens) */}
        <div className="hidden md:flex-1 md:flex items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 mx-4 max-w-lg">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder={headerData.placeholder}
                className="w-full p-2 pl-10 pr-4 text-white bg-transparent border border-gray-500 rounded-full focus:outline-none"
              />
            </div>
          </div>

          {/* Login & Join Buttons with Sliding Background */}
          <div className="relative flex items-center border border-blue-600 rounded-full overflow-hidden w-64">
            <motion.div
              className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
              animate={{ left: activeButton === "login" ? "0%" : "50%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: "50%" }}
            />
            <button
              onClick={() => setActiveButton("login")}
              className="relative z-10 flex-1 py-2 text-center font-semibold transition-colors duration-300 text-white"
            >
              {headerData.buttons.login}
            </button>
            <button
              onClick={() => setActiveButton("join")}
              className="relative z-10 flex-1 py-2 text-center font-semibold transition-colors duration-300 text-white"
            >
              {headerData.buttons.joinNow}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-16 left-0 w-full bg-gray-900 p-4 z-20"
          >
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder={headerData.placeholder}
                className="w-full p-2 pl-10 pr-4 text-white bg-transparent border border-gray-500 rounded-full focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <div className="relative flex items-center border border-blue-600 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
                  animate={{ left: activeButton === "login" ? "0%" : "50%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ width: "50%" }}
                />
                <button
                  onClick={() => setActiveButton("login")}
                  className="relative z-10 flex-1 py-2 text-center font-semibold text-white"
                >
                  {headerData.buttons.login}
                </button>
                <button
                  onClick={() => setActiveButton("join")}
                  className="relative z-10 flex-1 py-2 text-center font-semibold text-white"
                >
                  {headerData.buttons.joinNow}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
