"use client";

import { BookType } from "@/book.type";
import React, { createContext, useState } from "react";

interface IBookContext {
  readBooks: BookType[];
  setReadBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
  whishlist: BookType[];
  setWishlist: React.Dispatch<React.SetStateAction<BookType[]>>;
}

export const BookContext = createContext<IBookContext | undefined>(
  undefined
);

const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<BookType[]>([]);
  const [whishlist, setWishlist] = useState<BookType[]>([]);

  const sharedValue: IBookContext = {
    readBooks,
    setReadBooks,
    whishlist,
    setWishlist,
  };

  return (
    <BookContext.Provider value={sharedValue}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;