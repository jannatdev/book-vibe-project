import { BookType } from "@/book.type";
import BookCard from "../Share/BookCard";

export interface BooksProps {
    book: BookType
}

 export const getBooks = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

    if (!baseUrl) {
      throw new Error("SERVER_BASE_URL is not configured");
    }

    const res = await fetch(
      `${baseUrl.replace(/\/$/, "")}/booksData.json`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

 const Books=async()=> {

    const books = await getBooks();

   return (
        <div className='mt-20 max-w-7xl mx-auto'>
            <h2 className='text-[35px] font-bold text-center'> Books </h2>
            <div className="grid grid-cols-3 gap-20 mt-6">
              {books.slice(0,9).map((book:BookType)=> <BookCard key={book.bookId} book={book}></BookCard>

              )}  
            </div>
        </div>
    )
}
export default Books;