import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Book from "../components/Book";
import Form from "../components/Form";
export default function BookPage({ getBooks }) {
  const [book, setBook] = useState({});

  const params = useParams();

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    const API = `http://localhost:8080/books?_id=${params.id}`;
    const res = await axios.get(API);
    setBook(res.data[0]);
  }

  return (
    <main>
      <Book
        title={book.title}
        description={book.description}
        status={book.status}
        getBooks={getBooks}
      />
      <Form />
    </main>
  );
}
