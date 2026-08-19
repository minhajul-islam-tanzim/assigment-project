"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="mt-52">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 text-center md:text-left max-w-md"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Find Your <span className="text-pink-400">Next </span>Read
          </h1>
          <p className="text-gray-600">
            You can find your favorite book in here
          </p>
          <Link href="/all-books">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary btn-lg rounded-full px-8 w-fit mx-auto md:mx-0"
            >
              Browse Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Right side image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-md h-79 md:h-96"
        >
          <Image
            src="https://images.unsplash.com/photo-1607473129014-0afb7ed09c3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Books"
            fill
            className="object-fill rounded-2xl"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Banner;