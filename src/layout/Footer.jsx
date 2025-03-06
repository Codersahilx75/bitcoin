import React from "react";
import footerData from "../assets/data/footerData";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Footer Container with Top Border Curve */}
      <div className="relative container mx-auto px-6 py-10">
        <div className="border-gradient w-full p-8 ">
          <div className="flex mt-5 flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
            {/* Left Section - Logo & Description */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-4 md:w-1/3">
              <img
                src={footerData.logo}
                alt="BlocFans Logo"
                className="h-14 md:h-16"
              />
              <p className="max-w-xs outfit text-gray-300 text-sm md:text-md">
                {footerData.description}
              </p>
            </div>

            {/* Center Section - Follow Us & Social Icons */}
            <div className="flex flex-col items-center md:items-center md:w-1/3">
              <span className="text-white text-lg outfit mb-2">Follow us</span>
              <div className="flex space-x-4">
                {footerData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00C3FD] p-3 rounded-full bg-gray-900 hover:text-white transition text-lg md:text-xl"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section - Footer Links */}
            <div className="flex flex-col md:flex-row justify-center md:justify-end space-y-3 md:space-y-0 md:space-x-6 md:w-1/3">
              {footerData.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-white outfit hover:text-[#00C3FD] transition text-sm md:text-md"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div
        className="text-center outfit py-3 text-sm md:text-md text-white rounded-b-[40px] mt-[-10px] w-full"
        style={{
          background:
            "linear-gradient(90deg, #000618 2.31%, #00C3FD 47.25%, #000618 99.25%)",
        }}
      >
        Copyright BlocFans Pty Ltd &copy; 2025 - All Rights Reserved
      </div>
    </footer>
  );
}
