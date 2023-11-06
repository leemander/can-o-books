import axios from "axios";
import Book from "./Book";
import { useState, useEffect } from "react";

export default function BestBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = "https://can-o-books-backend.onrender.com/books";
    const res = await axios.get(API);
    setBooks(res.data);
  }

  return books ? (
    books.map(({ title, description, status, index }) => {
      return (
        <Book
          key={index + 1}
          title={title}
          description={description}
          status={status}
        />
      );
    })
  ) : (
    <p>No books found.</p>
  );
}
