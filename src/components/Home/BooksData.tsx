"use client";

import BookCard from "../shared/BookCard";
import Link from "next/link";
import { RootState, AppDispatch } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchBook } from "@/app/store/features/bookSlice";
import { useEffect } from "react";
import { motion } from "framer-motion";

const BooksData = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { books } = useSelector((state: RootState) => state.Books);

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  const feature = books.slice(0, 4);

  return (
    <section className="py-16 container">
      <div className="w-full max-7xl mx-auto px-4 sm:px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl max-w-fit mx-auto font-semibold "
        >
          - Available Books -
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feature.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href={"all-books"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-primary text-white rounded-full px-8 mt-4 mx-auto flex"
          >
            View More
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default BooksData;