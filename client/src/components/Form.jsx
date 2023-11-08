import axios from "axios";
import { useState } from "react";

export default function Form({ books, setBooks }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    status: false,
  });

  function handleChange(event) {
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const API = "https://can-o-books-backend.onrender.com/books";
    const res = await axios.post(API, formData);
    setBooks([...books, res.data]);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        name="title"
        placeholder="title"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="description"
        placeholder="description"
        onChange={(e) => handleChange(e)}
      />
      <input name="status" type="checkbox" onChange={(e) => handleChange(e)} />
      <button>Add Book</button>
    </form>
  );
}
