import { Card } from "../../models/cardModel.js";
import { Service } from "../service.js";

export class PlayService extends Service {
  constructor(controller) {
    super(controller);
  }

  getCards(difficulty, theme) {
    let cards = [];
    let url = `https://memory-game-backend-subvray.vercel.app/api/cards/${difficulty}/${theme}`;

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
    const url =
      "https://memory-game-backend-subvray.vercel.app/api/scores/post_score";
    const requestData = {
      username: username,
      clicks: clicks,
      time: time,
      score: score,
      difficulty: difficulty,
    };
    axios
      .post(url, requestData)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  }
}
