import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = "https://can-o-books-backend.onrender.com/books";
    const res = await axios.get(API);
    setBooks(res.data);
  }

  return (
    <>
      <main>
        {books &&
          books.map((book) => {
            return (
              <article>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <p>Status: {book.status}</p>
              </article>
            );
          })}
      </main>
    </>
  );
}

export default App;
