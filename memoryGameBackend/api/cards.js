const express = require("express");
const cors = require("cors");
const app = express();
const { food } = require("./themes");

app.use(cors());

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getIconIndex(icon) {
  let newIconIndex = randomInteger(0, food.length - 1);
  if (icon === newIconIndex) {
    return getIconIndex(newIconIndex);
  }
  return newIconIndex;
}

function getCards(difficulty) {
  let cards = [];
  for (let i = 0; i < difficulty.length; i++) {
    let iconIndex = getIconIndex(-1);
    let card = {
      isDiscovered: false,
      icon: food[iconIndex],
      id: iconIndex,
    };
    cards.push(card);
  }
  return cards;
}

function cardsHandler(req, res) {
  let data = { cards: [] };

  if (req.params.difficulty !== null && req.params.theme !== null) {
    const difficulty = req.params.difficulty;
    const theme = req.params.theme;
    let cards = (data.cards = getCards(difficulty));
    cards.forEach((card) => {
      data.cards.push(card);
    });
    cards.forEach((card) => {
      data.cards.push(card);
    });
  }
  res.json(data);
}

module.exports = cardsHandler;
