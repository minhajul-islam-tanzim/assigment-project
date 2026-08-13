import Image from "next/image";
import { Book } from "@/types/book";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div>
      <div className="mt-20 mb-10  bg-base-50 shadow-md hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
        <figure className="relative h-60 w-full">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            className="object-contain"
          />
        </figure>
        <div className="card-body">
          <h1 className="font-semibold mx-auto">{book.title}</h1>

          <div className="mx-auto">
            <Link href={`/books/${book.id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
};

export default BookCard;
