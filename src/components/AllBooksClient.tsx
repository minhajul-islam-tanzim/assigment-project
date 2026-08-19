"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/store/store";
import { fetchBook } from "@/app/store/features/bookSlice";
import BookCard from "@/components/shared/BookCard";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Story", "Tech", "Science"];

const AllBooksClient = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const { books, loading, error } = useSelector((state: RootState) => state.Books);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBook());
    }
  }, [dispatch, books.length]);

  useEffect(() => {
    const setUrl = searchParams.get("categories") || "All";
    setSelectedCategory(setUrl);
  }, [searchParams]);

  if (loading) {
    return <div className="text-center py-20 text-2xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-2xl text-red-500">Error: {error}</div>;
  }

  const filterBooks = books.filter((book) => {
    const matchCategory = selectedCategory === "All" || book.category === selectedCategory;
    const matchSearch = book.title.toLocaleLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section className="mt-12 py-12 container mx-auto px-4 sm:px-6 md:px-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        📚 All Books
      </motion.h1>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-2xl mx-auto mb-8"
      >
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full transition ${
              selectedCategory === category ? "btn btn-primary" : ""
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Books Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filterBooks.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full text-center text-gray-500"
            >
              There is no books Available
            </motion.p>
          ) : (
            filterBooks.map((book, index) => (
              <motion.div
                key={book.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default AllBooksClient;