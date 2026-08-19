'use client'

import { fetchBook } from "@/app/store/features/bookSlice"
import { AppDispatch, RootState } from "@/app/store/store"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"



const BookDetaildPage = () => {
  
  
  
  
  
  
  
const [click, setClick] = useState(false)  

  
  
  const dispatch = useDispatch<AppDispatch>()
  const { id } = useParams()
  
  const { books } = useSelector((state: RootState) => state.Books)
  
  const book = books.find((book) => book.id === Number(id))



  const [copy, setCopy] = useState(book?.available_quantity?? 0)



   useEffect(() => {
        if(books.length == 0){
          dispatch(fetchBook())
        }
  }, [dispatch, books.length])


      useEffect(() => {
        if(book){
          setCopy(book.available_quantity)
        }
  }, [book])

      const handleChange = () => {
            setCopy(copy - 1)
            setClick(true)
      }
          
      

  if (!book) {
    return <div className="pt-32 text-center text-red-400 font-bold text-2xl"> Books not Available </div>
  }

  return (
    <div className="pt-28 pb-16 max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-10">

        {/* left image */}
        <div className="relative w-full md:w-1/3 h-96">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* right details */}
        <div className="flex-1 flex flex-col gap-1 justify-center">

          {/* Top badges */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
              {book.category?.toUpperCase()}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
              {copy} COPIES AVAILABLE
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-serif font-bold text-gray-900">{book.title}</h1>

          {/* Author */}
          <p className="text-gray-700">
            by <span className="text-orange-500 font-semibold">{book.author}</span>
          </p>

          <hr className="border-gray-200" />

          {/* About */}
          <div>
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">About This Book</h2>
            <p className="text-gray-600 leading-relaxed">{book.description}</p>
          </div>

          {/* Category & Availability cards */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Category</p>
              <p className="font-semibold text-gray-900">{book.category}</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Availability</p>
              <p className="font-semibold text-emerald-600">{copy} copies left</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-2">

            {
              click ?
              <button
            className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-full transition">
              📖Collected
            </button>   :


             <button
            onClick={handleChange}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
              📖 Borrow This Book
            </button>
            }

            <Link
              href="/all-books"
              className="flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold px-6 py-3 rounded-full transition"
            >
              ← Back to Library
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BookDetaildPage