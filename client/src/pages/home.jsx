import Form from "../components/Form";
import BestBooks from "../components/BestBooks";

export default function Home({ books, setBooks, getBooks }) {
  return (
    <>
      <h2>Best Books</h2>
      <BestBooks books={books} getBooks={getBooks} />
      <Form books={books} setBooks={setBooks} />
    </>
  );
}
