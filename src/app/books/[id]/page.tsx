'use client'

import { RootState } from "@/app/store/store"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useSelector } from "react-redux"


const BookDetaildPage = () => {

  const {id} = useParams()

  const { books } = useSelector((state:RootState) => state.Books)
  const book = books.find((book) => book.id === Number(id))


  if( !book ){
    return <div className="pt-102 text-center text-red-400 font-bold text-2xl"> Books not Available </div>
  }



  return (
  <div className="pt-28 pb-16 max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* right image  */}
        <div className="relative w-full md:w-1/3 h-96">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

          {/* image details  */}
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-gray-600">by {book.author}</p>
          <p className="text-gray-700">{book.description}</p>
          <p className="font-semibold">
            {book.available_quantity} copies left
          </p>

          {/* <button className="btn btn-primary w-fit mt-4">
            Borrow This Book
          </button> */}
        </div>

      </div>
    </div>
  )
}

export default BookDetaildPage
