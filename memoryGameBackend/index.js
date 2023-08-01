const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.send("hola");
});

module.exports = app;
