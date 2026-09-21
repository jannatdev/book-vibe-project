'use client';

import { BookType } from '@/book.type';
import { BookContext } from '@/Contex/BookProvider';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { BiStar } from 'react-icons/bi';

const ListedBooksPage = () => {
    const context = useContext(BookContext);

    if (!context) {
        throw new Error('ListedBooksPage must be inside BookProvider');
    }

    const { readBooks, whishlist } = context;

    const [sortby, setSortby] = useState<'rating' | 'page' | 'year'>('rating');

    const sortBooks = (books: BookType[]) => {
    const sortedBooks = [...books];

    if (sortby === "rating") {
        sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortby === "page") {
        sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortby === "year") {
        sortedBooks.sort(
            (a, b) => a.yearOfPublishing - b.yearOfPublishing
        );
    }

    return sortedBooks;
};
const sortedReadBooks = sortBooks(readBooks);
const sortedWishlist = sortBooks(whishlist);

    return (
        <div className='container mx-auto '>
            <h2 className='text-3xl font-bold text-center py-6 '>Listed Books</h2>

            <div className='my-5 text-center'>
                <select value={sortby} onChange={(e)=> setSortby(e.target.value as "rating" | "page"|"year" )} 
                defaultValue="Pick a Runtime" className="select select-success">
                    <option disabled={true}>Sort By</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"page"}>Page</option>
                    <option value={"year"}>year</option>
                    </select>
            </div>
            {/* name of each tab group should be unique */}
        <div className='tabs tabs-box '>

           
                <input type="radio" name="my_tabs_1" className="tab" aria-label={`Read Book (${readBooks.length})`}/>
                
 
                <div  className="tab-content border-base-300 bg-base-100 p-10">
                    {sortedReadBooks.length > 0 ?(
                        sortedReadBooks .map((book:BookType)=> {
                           return <div  key={book.bookId}className="group flex w-full my-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                            {/* Book Image */}
                            <div className="relative flex h-44 w-32 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 via-gray-100 to-green-50">
                                
                                {/* Category */}
                                <span className="absolute left-2 top-2 z-10 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-gray-600 shadow-sm">
                                {book.category}
                                </span>

                                <Image
                                src={book.image}
                                alt={book.bookName}
                                width={120}
                                height={160}
                                className="h-36 w-auto object-contain drop-shadow-lg transition duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex min-w-0 flex-1 flex-col justify-between px-4 py-1">

                                {/* Title */}
                                <div>
                                <div className="flex items-start justify-between gap-2">
                                    <h2 className="line-clamp-2 text-lg font-bold leading-tight text-gray-900">
                                    {book.bookName}
                                    </h2>

                                    
                                </div>

                                {/* Author */}
                                <p className="mt-2 text-sm text-gray-500">
                                    By{" "}
                                    <span className="font-medium text-gray-700">
                                    {book.author}
                                    </span>
                                </p>

                                {/* Tags */}
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    {book.tags.slice(0, 2).map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-600"
                                    >
                                        {tag}
                                    </span>
                                    ))}
                                </div>
                                </div>

                                {/* Bottom Information */}
                                <div className="mt-3 flex items-center justify-between border-t border-dashed border-gray-200 pt-3">

                                {/* Pages & Year */}
                                <div className="text-xs text-gray-400">
                                    <span>{book.totalPages} Pages</span>
                                    <span className="mx-2">•</span>
                                    <span>{book.yearOfPublishing}</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1 rounded-full bg-gray-50 px-2.5 py-1.5">
                                    <BiStar
                                    size={15}
                                    className="fill-yellow-400 text-yellow-400"
                                    />
                                    <span className="text-xs font-semibold text-gray-800">
                                    {book.rating.toFixed(1)}
                                    </span>
                                </div>

                                </div>
                            </div>
                            </div>

                        })
                    ) :(
                        <p> No Read Book is listed</p>
                    )}
                </div>

            
                
               <input type="radio" name="my_tabs_1" className="tab" aria-label= {`Wishlist Book (${whishlist.length})`} defaultChecked /> 
               
                <div  className="tab-content border-base-300 bg-base-100 p-10">
                     {sortedWishlist.length > 0 ?(
                        sortedWishlist .map((book:BookType)=> {
                             return <div  key={book.bookId}className="group flex w-full my-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                            {/* Book Image */}
                            <div className="relative flex h-44 w-32 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 via-gray-100 to-green-50">
                                
                                {/* Category */}
                                <span className="absolute left-2 top-2 z-10 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-gray-600 shadow-sm">
                                {book.category}
                                </span>

                                <Image
                                src={book.image}
                                alt={book.bookName}
                                width={120}
                                height={160}
                                className="h-36 w-auto object-contain drop-shadow-lg transition duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex min-w-0 flex-1 flex-col justify-between px-4 py-1">

                                {/* Title */}
                                <div>
                                <div className="flex items-start justify-between gap-2">
                                    <h2 className="line-clamp-2 text-lg font-bold leading-tight text-gray-900">
                                    {book.bookName}
                                    </h2>

                                    
                                </div>

                                {/* Author */}
                                <p className="mt-2 text-sm text-gray-500">
                                    By{" "}
                                    <span className="font-medium text-gray-700">
                                    {book.author}
                                    </span>
                                </p>

                                {/* Tags */}
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    {book.tags.slice(0, 2).map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-600"
                                    >
                                        {tag}
                                    </span>
                                    ))}
                                </div>
                                </div>

                                {/* Bottom Information */}
                                <div className="mt-3 flex items-center justify-between border-t border-dashed border-gray-200 pt-3">

                                {/* Pages & Year */}
                                <div className="text-xs text-gray-400">
                                    <span>{book.totalPages} Pages</span>
                                    <span className="mx-2">•</span>
                                    <span>{book.yearOfPublishing}</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1 rounded-full bg-gray-50 px-2.5 py-1.5">
                                    <BiStar
                                    size={15}
                                    className="fill-yellow-400 text-yellow-400"
                                    />
                                    <span className="text-xs font-semibold text-gray-800">
                                    {book.rating.toFixed(1)}
                                    </span>
                                </div>

                                </div>
                            </div>
                            </div>
                        })
                    ) :(
                        <p> No Wishlist Book is listed</p>
                    )}
                </div>
            </div>  
                
                
                
                
       
            
        </div>
    );
};

export default ListedBooksPage;