export default function Button({ showNewBook, setShowNewBook }) {
  return <button onClick={() => setShowNewBook(!showNewBook)}>Add Book</button>;
}
