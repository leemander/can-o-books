import axios from "axios";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import BestBooks from "../components/BestBooks";

export default function Home({ books, getBooks, setBooks }) {
  return (
    <>
      <h2>Best Books</h2>
      <BestBooks books={books} getBooks={getBooks} />
      <Form books={books} setBooks={setBooks} />
    </>
  );
}
