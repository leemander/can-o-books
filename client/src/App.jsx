import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [movies, setBooks] = useState([]);

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
      <main></main>
    </>
  );
}

export default App;
