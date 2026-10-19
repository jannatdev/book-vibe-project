import { BookType } from "@/book.type";
import ReadBookButton from "@/Component/BookDetails/ReadBookButton";
import WishlistButton from "@/Component/BookDetails/WishlistButton";
import Image from "next/image";

export interface PageProps {
    params: {
        bookId:string
    }
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


 const BookDetailsPage= async({ params  }: PageProps)=> {

    const {bookId} = await params;

    const books = await getBooks();

    const book =books.find((book:BookType)=> String(book.bookId)===String(bookId))

    
    return (

        <div className="grid grid-cols-12 gap-5 p-10">
            <div className="col-span-4 rounded-2xl bg-gray-100 p-8">
                <Image
                    src={book.image}
                    alt="The Catcher in the Rye"
                    width={1200}
                    height={1400}
                    // className=" p-10 w-auto object-contain"
                />
             </div>

        
         <div className="col-span-8 justify-center p-10">

          {/* Title */}
            <h1 className="text-2xl font-bold leading-tight text-gray-900">
                {book.bookName}
            </h1>

          {/* Author */}
            <p className="mt-2 text-xl text-gray-700">
                By : <span className="font-semibold">{book.author}</span>
            </p>

           <div className="my-4 border-t border-gray-200" />

          {/* Category */}
            <p className="text-lg text-gray-700">{book.category} </p>

                  <div className="my-4 border-t border-gray-200" />

          {/* Review */}
                    <div className="text-[14px] leading-7 text-gray-600">
                                    <p>
                                    <span className="font-bold text-gray-900">Review :</span>{" "}
                                    {book.review}
                                    </p>

                        
                            </div>

                    {/* Tags */}
                    <div className="mt-5 flex items-center gap-3">
                                <span className="font-bold text-gray-900">
                                Tag
                                </span>

                            <span className="rounded-full bg-green-50 px-5 py-2 font-medium text-green-600">
                                #Young Adult
                            </span>

                            <span className="rounded-full bg-green-50 px-5 py-2 font-medium text-green-600">
                            #Identity
                            </span>
                    </div>

                    <div className="my-6 border-t border-gray-200" />

                    {/* Book Details */}
                    <div className="space-y-5 text-[15px]">
                        <div className="flex">
                        <span className="w-52 text-gray-600">
                            Number of Pages:
                        </span>
                        <span className="font-bold text-gray-900">
                            281
                        </span>
                        </div>

                        <div className="flex">
                        <span className="w-52 text-gray-600">
                            Publisher:
                        </span>
                        <span className="font-bold text-gray-900">
                            J.B Lippincott & Co.
                        </span>
                        </div>

                        <div className="flex">
                        <span className="w-52 text-gray-600">
                            Year of Publishing:
                        </span>
                        <span className="font-bold text-gray-900">
                            1960
                        </span>
                        </div>

                        <div className="flex">
                        <span className="w-52 text-gray-600">
                            Rating:
                        </span>
                        <span className="font-bold text-gray-900">
                            4.8
                        </span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex gap-4">
                        <ReadBookButton book={book}></ReadBookButton>
                        <WishlistButton book={book}></WishlistButton>
                        
                    </div>

         </div>

        </div>
        
        
    )
};
export default BookDetailsPage;