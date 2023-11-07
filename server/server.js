const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
const axios = require("axios");
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
const Book = require("./models/book");
mongoose.connect(process.env.DB_URL);

app.get("/", (_, res) => {
  res.json("This is the root.");
});

app.get("/books", async (req, res) => {
  const books = await Book.find(req.query);
  res.json(books);
});

app.post("/books", async (req, res) => {
  const newBook = await Book.create(req.body);
  res.json(newBook);
});

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}.`);
});
