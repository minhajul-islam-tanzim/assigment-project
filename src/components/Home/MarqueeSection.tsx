"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const MarqueeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 py-4 shadow-md mt-40"
    >
      <Marquee speed={50} pauseOnHover gradient={false}>
        <span className="mx-8 text-lg font-semibold text-white flex items-center gap-2">
          📚 New Arrivals: The Silent Patient
        </span>
        <span className="mx-8 text-lg font-semibold text-white flex items-center gap-2">
          🎉 Special Discount on Memberships
        </span>
        <span className="mx-8 text-lg font-semibold text-white flex items-center gap-2">
          📖 New Arrivals: Atomic Habits
        </span>
        <span className="mx-8 text-lg font-semibold text-white flex items-center gap-2">
          🔥 Limited Time Offer on Yearly Plans
        </span>
      </Marquee>
    </motion.div>
  );
};

export default MarqueeSection;