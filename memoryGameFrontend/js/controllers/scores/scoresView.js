import { ControllerView } from "../controllerView.js";
import { ScoreView } from "../../views/scoreView.js";
import { div, p } from "../../libs/html.js";
export class ScoresView extends ControllerView {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.id = " scores-view";
    this.elementsContainer.className = "bg scores-view";
    this.cardContainer = div(
      { className: "card-container x" },
      this.elementsContainer
    );
  }

  showScore(scores) {
    if (scores.length > 0) {
      scores.forEach((score) => {
        let viewScore = new ScoreView(this.cardContainer, score);
      });
    } else {
      let noScores = div(
        { className: "no-scores-container" },
        this.cardContainer
      );
      p({ innerHTML: "❌<br> No scores  ", className: "no-scores" }, noScores);
    }
  }
}
