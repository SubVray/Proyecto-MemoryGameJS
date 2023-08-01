const express = require("express");
const cors = require("cors");
const app = express();
const { food, animals, cars, faces } = require("./themes");
app.use(cors());

app.get("/api/icons", (req, res) => {
  res.send(faces);
});

module.exports = app;
