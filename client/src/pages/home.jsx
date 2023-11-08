import { useState } from "react";

import BestBooks from "../components/BestBooks";
import Form from "../components/Form";

export default function Home() {
  const [showNewBook, setShowNewBook] = useState(false);
  console.log(showNewBook);

  return (
    <>
      <h2>Best Books</h2>
      <BestBooks />
      <Form />
    </>
  );
}
