import React from 'react';
import { motion } from 'framer-motion';
import winningData from '../assets/data/winningData'; // Ensure this file contains the required data

export default function Winner() {
  return (
    <div className="w-full text-white text-center mt-10 lg:mt-20 relative px-4">
      {/* Heading */}
      <motion.h2
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="text-2xl outfit sm:text-3xl md:text-4xl font-bold"
      >
        Who’s <span className="text-blue-500">Winning in Crypto?</span>
      </motion.h2>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.1 }}
        className="text-lg outfit sm:text-xl font-medium mt-2"
      >
        See the Real Movers & Shakers
      </motion.p>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
        className="text-sm outfit sm:text-base text-gray-400 mt-4 max-w-2xl mx-auto"
      >
        {winningData.description}
      </motion.p>

      {/* Cards Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
        className="flex justify-center gap-6 lg:space-y-0 space-y-10 md:gap-10 mt-10 flex-wrap"
      >
        {winningData.winners.map((winner, index) => {
          // Set initial animation based on card position:
          // Left card: animate from left, Right card: animate from right, Middle: animate from bottom.
          const initialVariant =
            index === 0
              ? { x: -100, opacity: 0 }
              : index === 2
              ? { x: 100, opacity: 0 }
              : { y: 30, opacity: 0 };

          return (
            <motion.div
              key={index}
              initial={initialVariant}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: index * 0.1 }}
              className="relative rounded-xl p-4 sm:p-6 shadow-lg w-full sm:w-72 text-center overflow-visible bg-[#00182D]"
            >
              {/* Top Right Border (Diagonal Gradient) */}
              <div className="absolute roundex-xl top-0 right-0 w-40 h-[3px] bg-gradient-to-l from-[#004DF4] to-transparent"></div>
              <div className="absolute roundex-xl top-0 right-0 h-40 w-[3px] bg-gradient-to-b from-[#26DDFF] to-transparent"></div>
            
              {/* Bottom Left Border (Diagonal Gradient) */}
              <div className="absolute roundex-xl bottom-0 left-0 w-40 h-[3px] bg-gradient-to-r from-[#26DDFF] to-transparent"></div>
              <div className="absolute roundex-xl bottom-0 left-0 h-60 w-[3px] bg-gradient-to-t from-[#004DF4] to-transparent"></div>
              
              {/* Main Winner Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.1 }}
                className="relative mt-8"
              >
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="w-full h-48 sm:h-64 rounded-lg object-cover"
                />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.15 }}
                className="mt-4 text-base outfit sm:text-lg font-bold text-white"
              >
                {winner.name}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
                className="flex justify-around mt-2 outfit text-xs sm:text-sm text-gray-300"
              >
                <p>
                  Points{' '}
                  <span className="bg-blue-500 px-2 sm:px-3 py-1 sm:py-2 rounded-full font-bold">
                    {winner.points}
                  </span>
                </p>
                <p>
                  Rank{' '}
                  <span className="bg-blue-500 px-2 sm:px-3 py-1 sm:py-2 rounded-full font-bold">
                    {winner.rank}
                  </span>
                </p>
              </motion.div>
              
              {/* Bottom Image (animates from left) */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.25 }}
                className="absolute -bottom-12 sm:-bottom-24 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-24 sm:h-24"
              >
                <img
                  src={winningData.bottomImages[index]}
                  alt={`Bottom Image ${index}`}
                  className="w-full h-full"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Global Button (animates from right) */}
      <motion.button
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         viewport={{ once: false, amount: 0.3 }}
         transition={{ duration: 1.2, ease: "easeInOut" }}
        className="mt-16 outfit sm:mt-28 bg-blue-500 text-white px-8 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        Dominate the Ranks
      </motion.button>
    </div>
  );
}
