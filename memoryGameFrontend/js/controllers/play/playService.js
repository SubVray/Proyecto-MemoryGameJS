import { Card } from "../../models/cardModel.js";
import { Service } from "../service.js";

export class PlayService extends Service {
  constructor(controller) {
    super(controller);
  }

  getCards(difficulty, theme) {
    let cards = [];

    let url = `https://memory-game-backend-subvray.vercel.app/api/cards/${2}/${theme}`;

    try {
      axios.get(url).then((response) => {
        let data = response.data;
        data.cards.forEach((cardData) => {
          let card = new Card(cardData.id, cardData.icon);
          cards.push(card);
        });
        this.controller.showCards(cards);
      });
    } catch (error) {
      console.error("Error requesting cards", error);
    }
  }

  sendScore(score, clicks, time, username, difficulty) {
    // const url = "http://localhost:3000/api/scores/post_score";
    const url =
      "https://memory-game-backend-subvray.vercel.app/api/scores/post_scores";
    const requestData = {
      username: username,
      clicks: clicks,
      time: time,
      score: score,
      difficulty: parseInt(difficulty),
    };
    axios
      .post(url, requestData)
      .then(() => {})
      .catch((error) => {
        console.error(error);
        console.error("Error al enviar el puntaje:", error.message);
      });
  }
}
