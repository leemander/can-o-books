import axios from "axios";
import { useState } from "react";

export default function Form({ books, setBooks, book, setBook }) {
  const [formData, setFormData] = useState(
    book ?? {
      title: "",
      author: "",
      status: false,
    }
  );

  function handleChange(event) {
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  }

  async function addBook(event) {
    event.preventDefault();
    const API = "https://can-o-books-backend.onrender.com/books";
    const res = await axios.post(API, formData);
    setBooks([...books, res.data]);
  }

  async function updateBook(event) {
    event.preventDefault();
    const API = `https://can-o-books-backend.onrender.com/books/${book._id}`;
    await axios.put(API, formData);
    setBook(formData);
  }

  return (
    <form onSubmit={book?.title ? updateBook : addBook}>
      <fieldset>
        <legend>{book?.title ? "Update " : "Add "}Book</legend>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            name="title"
            onChange={handleChange}
            value={formData.title}
          />
        </label>
        <label htmlFor="description">
          Description:
          <textarea
            id="description"
            cols={40}
            rows={10}
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
        </label>
        <label htmlFor="status">
          Read:
          <input
            id="status"
            name="status"
            type="checkbox"
            onChange={handleChange}
            checked={formData.status}
          />
        </label>
        <button>Submit</button>
      </fieldset>
    </form>
  );
}
