import { BookType } from "@/book.type"
import Image from "next/image";
import Link from "next/link";
import { BiStar } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";

export interface BookCardProps {
    book: BookType
}

  const BookCard=({ book }: BookCardProps)=> {
    
    return (
       
    <div className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Decorative background */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-100/60 blur-2xl transition-all duration-500 group-hover:bg-green-200/70"></div>

      {/* Image Section */}
      <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-[22px] bg-linear-to-br from-gray-50 via-gray-100 to-green-50">

        {/* Small category badge */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-600 shadow-sm backdrop-blur">
          {book.category}
        </span>

        {/* Image */}
        <Image
          src={book.image}
          alt={book.bookName}
          width={230}
          height={280}
          className="relative z-10 h-67.5 w-auto object-contain drop-shadow-2xl transition duration-500 group-hover:scale-105 group-hover:-rotate-1"
        />

        {/* Bottom glow */}
        <div className="absolute bottom-5 h-8 w-36 rounded-full bg-black/10 blur-xl"></div>
      </div>

      {/* Content */}
      <div className="px-2 pb-2 pt-6">

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-600 transition-colors group-hover:bg-green-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title + Arrow */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-serif text-[25px] font-bold leading-tight text-gray-900">
            {book.bookName}
          </h2>

          <Link href={`/books/${book.bookId}`} >
            <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-white">
            <BsArrowUpRight size={19} />
          </button>
          </Link>

          
        </div>

        {/* Author */}
        <p className="mt-3 text-[15px] text-gray-500">
          By <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-dashed border-gray-200"></div>

        {/* Bottom Info */}
        <div className="flex items-center justify-between">

          {/* Category */}
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Category
            </p>
            <p className="mt-1 font-medium text-gray-700">
              {book.category}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 rounded-full bg-gray-50 px-3 py-2">
            <BiStar
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold text-gray-800">
              {book.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Extra Information */}
        <div className="mt-5 flex items-center justify-between text-xs text-gray-400">
          <span>{book.totalPages} Pages</span>
          <span>{book.yearOfPublishing}</span>
        </div>

      </div>
    </div>
  );
};

export default BookCard;
    