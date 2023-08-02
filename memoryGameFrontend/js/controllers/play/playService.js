import { Card } from "../../models/cardModel.js";
import { Service } from "../service.js";

export class PlayService extends Service {
  constructor(controller) {
    super(controller);
  }

  getCards(difficulty, theme) {
    let cards = [];

    let url = `https://memory-game-backend-subvray.vercel.app/api/cards/${2}/${theme}`;
    // let url = `http://localhost:3002/api/cards/${2}/${theme}`;
    let request = new XMLHttpRequest();
    request.open("get", url);
    request.onload = () => {
      if (request.status === 200) {
        let data = JSON.parse(request.response);
        data.cards.forEach((cardData) => {
          let card = new Card(cardData.id, cardData.icon);
          cards.push(card);
        });
      } else {
        console.error("Error requesting cards");
      }
      this.controller.showCards(cards);
    };
    request.send();
  }

  sendScore(score, clicks, time, username) {
    // const url = "http://localhost:3002/users/score";
    const url = "https://memory-game-backend-subvray.vercel.app/users/score";
    const requestData = {
      username: username,
      clicks: clicks,
      time: time,
      score: score,
    };
    axios
      .post(url, requestData)
      .then((response) => {
        console.log("Puntaje enviado correctamente:", response.data);
      })
      .catch((error) => {
        console.error("Error al enviar el puntaje:", error.message);
      });
  }
}
