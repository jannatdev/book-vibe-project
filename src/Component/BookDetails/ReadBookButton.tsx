"use client";

import { BookType } from "@/book.type";
import { BookContext } from "@/Contex/BookProvider";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadBookButton = ({ book }: { book: BookType }) => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("ReadBookButton must be used inside BookProvider");
  }

  const { readBooks, setReadBooks } = context;

  const readBookHandle = () => {
    setReadBooks([...readBooks, book]);

    toast.success(`${book.bookName} is listed as read`);
  };

  return (
    <div>
      <button
        onClick={readBookHandle}
        className="rounded-lg border border-gray-400 px-8 py-4 font-semibold text-gray-900 transition hover:bg-gray-100"
      >
        Read
      </button>
    </div>
  );
};

export default ReadBookButton;;