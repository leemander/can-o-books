import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import BookPage from "./pages/BookPage";
import LoginButton from "./components/LogInButton";
import LogoutButton from "./components/LogoutButton";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const { isAuthenticated } = useAuth0();

  async function getBooks() {
    const API = "https://can-o-books-backend.onrender.com/books";
    const res = await axios.get(API);
    setBooks(res.data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <BrowserRouter>
      <header>
        <h1>Can-o-Books</h1>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
          </ul>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home books={books} setBooks={setBooks} getBooks={getBooks} />
            }
          ></Route>
          <Route path="/About" element={<About />}></Route>
          <Route
            path="/Book/:id"
            element={<BookPage books={books} setBooks={setBooks} />}
          ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
