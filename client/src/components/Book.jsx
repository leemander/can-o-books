import axios from "axios";

export default function Book({ title, description, status, id, getBooks }) {
  async function handleClick() {
    const API = "https://can-o-books-backend.onrender.com/books/" + id;
    await axios.delete(API);
    getBooks();
  }

  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
      <button onClick={handleClick}>Delete</button>
    </article>
  );
}
