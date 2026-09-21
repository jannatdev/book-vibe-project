import { BookType } from "@/book.type";
import BookCard from "@/Component/Share/BookCard";

export const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.status}`);
    }

    const data = await res.json();

    console.log("Books data:", data);

    return data;
  } catch (error) {
    console.error("Error data fetching:", error);
    return [];
  }
};

const BooksPage = async () => {
  const books: BookType[] = await getBooks();

  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-center text-[35px] font-bold">
        Books
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.length > 0 ? (
          books.map((book: BookType) => (
            <BookCard
              key={book.bookId}
              book={book}
            />
          ))
        ) : (
          <p className="col-span-full text-center">
            No books found.
          </p>
        )}
      </div>
    </div>
  );
};

export default BooksPage;