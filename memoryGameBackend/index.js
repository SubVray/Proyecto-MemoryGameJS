const express = require("express");
const cors = require("cors");
const app = express();
require("./database.js");
app.use(express.json());

// Configura opciones de CORS
const corsOptions = {
  origin: [
    "https://memory-game-69f54.web.app",
    "https://memory-game-backend-subvray.vercel.app",
    "http://localhost:3000",
    "http://localhost:3001",
  ],
  methods: "GET,PUT,POST,DELETE",
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Api Funcionado");
});

// Rutas
const userRoutes = require("./routes/user.routes.js");
const cardRoutes = require("./routes/cards.routes.js");

app.use("/api/scores", userRoutes);
app.use("/api/cards", cardRoutes);

module.exports = app;
