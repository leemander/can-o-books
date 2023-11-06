const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
const axios = require("axios");
app.use(cors());

const mongoose = require("mongoose");
const Book = require("./models/book");
mongoose.connect(
  "mongodb+srv://leemander:bookspassword@cluster0.11sdakd.mongodb.net/"
);

app.get("/", (_, res) => {
  res.json("This is the root.");
});

app.get("/books", async (req, res) => {
  const books = await Book.find(req.query);
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}.`);
});
