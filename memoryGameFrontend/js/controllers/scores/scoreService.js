import { Score } from "../../models/scoreModel.js";
import { Service } from "../service.js";

export class ScoreService extends Service {
  constructor(controller) {
    super(controller);
  }

  getScores() {
    let scores = [];
    let url = `https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/scores`;
    let request = new XMLHttpRequest();
    request.open("get", url);
    request.onload = () => {
      if (request.status === 200) {
        let data = JSON.parse(request.response);
        data.forEach((scoreData) => {
          let score = new Score(
            scoreData.clicks,
            scoreData.score,
            scoreData.time,
            scoreData.username
          );
          scores.push(score);
        });
      } else {
        console.error("Error requesting cards");
      }
      this.controller.showScores(scores);
    };
    request.send();
  }
}
