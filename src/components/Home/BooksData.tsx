'use client'


import BookCard from "../shared/BookCard"
import Link from "next/link"
import { RootState } from "@/app/store/store"   
import { useSelector } from "react-redux"

const BooksData = () => {
        const {books} = useSelector((state: RootState) => state.Books)
        const feature = books.slice(0, 4)

  return (
    <section className="py-16 container">
        <div className="w-full max-7xl mx-auto px-4 sm:px-6 md:px-16">
                <h2 className="text-3xl max-w-fit mx-auto font-semibold ">
                  - Available Books -
                </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                feature.map((book) => (
                    <BookCard key={book.id} book={book}/>
                ))
            }
        </div>
            </div>

            <div>
                <Link href={'all-books'}>
                <button className="btn bg-primary text-white rounded-full px-8 mt-4 mx-auto flex">
                    View More
                </button>
                </Link>
            </div>

    </section>
  )
}

export default BooksData
