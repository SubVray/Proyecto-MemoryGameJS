const express = require("express");
const cors = require("cors");
const app = express();
const port = 3002;
const { food, animals, cars,faces } = require("./themes");
app.use(cors());

app.get("/cards/:difficulty/:theme", (req, res) => {
  let data = { cards: [] };

  if (req.params !== null) {
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
  }
  res.send(JSON.stringify(data));
});

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
  console.log(cards);
  return cards;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = randomInteger(0, i);
    [array[i], array[j]] = [array[j], array[i]];
  }
}
app.get("/scores", (req, res) => {
  res.send(faces);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
