import axios from "axios";
import { Link } from "react-router-dom";

export default function Book({ title, description, status, id, getBooks }) {
  async function handleClick() {
    const API = "https://can-o-books-backend.onrender.com/books/" + id;
    await axios.delete(API);
    getBooks();
  }

  return (
    <article>
      <Link to={`/book/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>
      <p>Read: {status ? "Yes" : "No"}</p>
      <button onClick={handleClick}>Delete</button>
    </article>
  );
}
