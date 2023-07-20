import { Card } from "../../models/cardModel.js";
import { Service } from "../service.js";

export class PlayService extends Service {
  constructor(controller) {
    super(controller);
  }

  getCards(difficulty, theme) {
    let cards = [];
    let url = `https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/cards/${difficulty}/type/${theme}`;
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
    // console.log(username);
    // let url = `https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/scores/`;
    // let request = new XMLHttpRequest();
    // request.open("post", url);
    // request.send(
    //   JSON.stringify({
    //     score: score,
    //     clicks: clicks,
    //     time: time,
    //     username: username,
    //   })
    // );
  }
}
