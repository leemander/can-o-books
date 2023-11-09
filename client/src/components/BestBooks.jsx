import { useEffect } from "react";
import Book from "./Book";

export default function BestBooks({ books, getBooks }) {
  useEffect(() => {
    getBooks();
  }, []);

  return books.length ? (
    books.map(({ _id, title, description, status }) => {
      return (
        <Book
          key={_id}
          id={_id}
          title={title}
          description={description}
          status={status}
          getBooks={getBooks}
        />
      );
    })
  ) : (
    <p>No books found.</p>
  );
}
