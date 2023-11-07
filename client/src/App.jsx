import import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const[showNewBook, setShowNewBook] = useState(false) 

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Can-o-Books</h1>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
