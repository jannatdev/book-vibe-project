"use client";

import { BookType } from "@/book.type";
import { BookContext } from "@/Contex/BookProvider";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book: BookType }) => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error(
      "WishlistButton must be used inside BookProvider"
    );
  }

  const { whishlist, setWishlist } = context;

  const handleWishlistButton = () => {
    setWishlist([...whishlist, book]);

    toast.success(`${book.bookName} is listed as wishlist`);
  };

  return (
    <div>
      <button
        onClick={handleWishlistButton}
        className="rounded-lg bg-[#55B3CC] px-8 py-4 font-semibold text-white transition hover:bg-[#43a2bb]"
      >
        Wishlist
      </button>
    </div>
  );
};

export default WishlistButton;