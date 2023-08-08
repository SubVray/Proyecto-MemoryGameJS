const { food, animals, vehicles, faces } = require("./themes");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
require("./database.js");
app.use(express.json());
app.use(cors());

// Rutas
const userRoutes = require("./routes/user.routes.js");
app.use("/api/scores", userRoutes);

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

  let addedIndexes = new Set();

  while (cards.length < difficulty) {
    let iconIndex = getIconIndex(-1, iconList);
    if (!addedIndexes.has(iconIndex)) {
      let card = {
        isDiscovered: false,
        icon: iconList[iconIndex],
        id: iconIndex,
      };
      cards.push(card);
      addedIndexes.add(iconIndex);
    }
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
