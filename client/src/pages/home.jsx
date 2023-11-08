import axios from "axios";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import BestBooks from "../components/BestBooks";

export default function Home() {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    const API = "https://can-o-books-backend.onrender.com/books";
    const res = await axios.get(API);
    setBooks(res.data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <h2>Best Books</h2>
      <BestBooks books={books} />
      <Form books={books} setBooks={setBooks} />
    </>
  );
}
