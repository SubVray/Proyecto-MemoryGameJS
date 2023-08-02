import { Score } from "../../models/scoreModel.js";
import { Service } from "../service.js";

export class ScoreService extends Service {
  constructor(controller) {
    super(controller);
  }

  async getScores() {
    let scores = [];
    const url = "http://localhost:3002/users/get_scores";

    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        const data = response.data;
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
        console.error("Error requesting scores:", response.status);
      }
    } catch (error) {
      console.error("Error in the request:", error.message);
    }

    this.controller.showScores(scores);
  }
}
