const express = require("express");
const cors = require("cors");
const app = express();
const { food, animals, cars, faces } = require("./themes");
app.use(cors());

app.get("/api", (req, res) => {
  res.send("hola");
});

app.get("api/scores", (req, res) => {
  res.send(faces);
});

module.exports = app;
