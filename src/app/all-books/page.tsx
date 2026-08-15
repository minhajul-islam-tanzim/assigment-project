"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/store/store";
import { fetchBook } from "@/app/store/features/bookSlice";
import BookCard from "@/components/shared/BookCard";

const categories = ["All", "Story", "Tech", "Science"];


const Allpage = () => {
    const dispatch = useDispatch<AppDispatch>();
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const { books, loading, error } = useSelector((state: RootState) => state.Books);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBook());
    }
  }, [dispatch, books.length]);

  
  if (loading) {
    return <div className="text-center py-20 text-2xl">Loading...</div>;
  }


  if (error) {
    return <div className="text-center py-20 text-2xl text-red-500">Error: {error}</div>;
  }


    const filterBooks = books.filter((book) => {

          const matchCategory = selectedCategory === "All" || book.category === selectedCategory;

          const matchSearch = book.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())

          return matchCategory && matchSearch
    })


  return (
      <section className="mt-12 py-12 container mx-auto px-4 sm:px-6 md:px-16">
              <h1 className="text-4xl font-bold text-center mb-8">📚 All Books</h1>


                 {/* Search */}
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

              {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition ${
            selectedCategory === category ? "btn btn-primary" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {filterBooks.length === 0 ? (
    <p className="col-span-full text-center text-gray-500">
        There is no books Available
    </p>
  ) : (
    filterBooks.map((book) => <BookCard key={book.id} book={book} />)
  )}
</div>





      </section>
  );
};

export default Allpage;
