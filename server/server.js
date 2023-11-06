const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
app.use(cors());

mongoose.connect(process.env.DB_URL);

app.get("/", (_, res) => {
  res.json("This is the root.");
});

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}.`);
});
