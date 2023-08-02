const { food, animals, vehicles, faces } = require("./themes");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// La URL de conexión se leerá de la variable de entorno en Vercel
const dbUri = process.env.MONGODB_URI;

// Conecta a la base de datos
mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexión exitosa a MongoDB Atlas"))
  .catch((err) => console.error("Error al conectar a MongoDB Atlas:", err));

// Rutas
const userRoutes = require("./routes/user.routes.js");
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Api Funcionado");
});

app.get("/api/cards/:difficulty/:theme", (req, res) => {
  let data = { cards: [] };
  if (req.params.difficulty !== null && req.params.theme !== null) {
    const difficulty = parseInt(req.params.difficulty);
    const theme = req.params.theme;
    let cards = getCards(difficulty, theme);
    cards.forEach((card) => {
      data.cards.push(card);
    });
    cards.forEach((card) => {
      data.cards.push(card);
    });
    shuffleArray(data.cards);
  }
  res.send(JSON.stringify(data));
});

app.get("/api/faces", (req, res) => {
  res.send(faces);
});

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getIconIndex(iconIndex, iconList) {
  let newIconIndex = randomInteger(0, iconList.length - 1);

  if (iconIndex === newIconIndex) {
    return getIconIndex(iconIndex, iconList);
  }
  return newIconIndex;
}

function getCards(difficulty, theme) {
  let cards = [];
  let iconList = null;
  switch (theme) {
    case "food":
      iconList = food;
      break;
    case "animals":
      iconList = animals;
      break;
    case "vehicles":
      iconList = vehicles;
      break;
    case "faces":
      iconList = faces;
      break;
    default:
      iconList = food;
      break;
  }

  for (let i = 0; i < difficulty; i++) {
    let iconIndex = getIconIndex(-1, iconList);
    let card = {
      isDiscovered: false,
      icon: iconList[iconIndex],
      id: iconIndex,
    };
    cards.push(card);
  }
  return cards;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

module.exports = app;
