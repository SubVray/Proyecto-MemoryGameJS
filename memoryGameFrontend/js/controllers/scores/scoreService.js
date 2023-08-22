import { Score } from "../../models/scoreModel.js";
import { Service } from "../service.js";
import { div, p } from "../../libs/html.js";
export class ScoreService extends Service {
  constructor(controller) {
    super(controller);
  }

  async getScores() {
    let scores = [];
    const url = `${this.baseURL}/api/scores/get_scores`;

    if (scores.length === 0) {
      let loadingContainer = div(
        { className: "loading-container" },
        this.controller.view.cardContainer
      );

      p(
        { innerHTML: "Loading scores", className: "text-cards-loading" },
        loadingContainer
      );
      div({ className: "lds-dual-ring" }, loadingContainer);
    }

    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        const data = response.data;
        data.forEach((scoreData) => {
          let score = new Score(
            scoreData.clicks,
            scoreData.score,
            scoreData.time,
            scoreData.username,
            scoreData.difficulty
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
