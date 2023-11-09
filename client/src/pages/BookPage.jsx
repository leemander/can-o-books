import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";
export default function BookPage({ books, setBooks }) {
  const [book, setBook] = useState({});

  const params = useParams();

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    const API = `https://can-o-books-backend.onrender.com/books?_id=${params.id}`;
    const res = await axios.get(API);
    setBook(res.data[0]);
  }

  return (
    <main>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>Read: {book.status ? "Yes" : "No"}</p>
      {book.title && <Form book={book} setBook={setBook} />}
    </main>
  );
}
