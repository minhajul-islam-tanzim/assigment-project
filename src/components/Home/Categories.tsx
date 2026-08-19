"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

type Category = {
  id: number;
  emoji: string;
  bg: string;
  title: string;
  desc: string;
  count: string;
  badgeColor: string;
};

const categories: Category[] = [
  {
    id: 1,
    emoji: "📖",
    bg: "bg-purple-100",
    title: "Story",
    desc: "Immerse yourself in captivating narratives and unforgettable",
    count: "4 BOOKS",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 2,
    emoji: "💻",
    bg: "bg-orange-100",
    title: "Tech",
    desc: "Master programming, design, and the technologies shaping",
    count: "4 BOOKS",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    id: 3,
    emoji: "🔬",
    bg: "bg-teal-100",
    title: "Science",
    desc: "Explore the cosmos, evolution, and the wonders of the natural world.",
    count: "4 BOOKS",
    badgeColor: "bg-teal-100 text-teal-700",
  },
];

export default function CategorySection() {
  return (
    <section className="relative py-20 px-6">
      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-6"
      >
        <span className="text-xs font-semibold tracking-wide text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full">
          CATEGORIES
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 3, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
      >
        Browse by <span className="text-orange-500">Category</span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 3, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-gray-500 max-w-xl mx-auto mb-14"
      >
        Discover books organized by genre — find exactly what you are looking
        for.
      </motion.p>

      {/* Slider wrapper */}
      <div className="relative max-w-6xl mx-auto">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 3, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition"
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl mb-6 ${cat.bg}`}
              >
                {cat.emoji}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {cat.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {cat.desc}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${cat.badgeColor}`}
                >
                  {cat.count}
                </span>

                <Link
                  className="flex items-center gap-1 text-sm font-semibold text-orange-500 hover:text-orange-600 transition"
                  href={`/all-books?categories=${cat.title}`}
                >
                  Explore <FiArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}