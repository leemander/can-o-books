import Book from "./Book";

export default function BestBooks({ books }) {
  return books ? (
    books.map(({ _id, title, description, status }) => {
      return (
        <Book
          key={_id}
          title={title}
          description={description}
          status={status}
        />
      );
    })
  ) : (
    <p>No books found.</p>
  );
}
