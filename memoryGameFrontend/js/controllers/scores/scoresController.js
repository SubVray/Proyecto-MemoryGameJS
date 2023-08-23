import { ScoresView } from "../scores/scoresView.js";
import { Controller } from "../controller.js";
import { ScoreService } from "./scoreService.js";

export class ScoresController extends Controller {
  constructor(gameManager, parent) {
    super(gameManager);
    this.view = new ScoresView(this, parent);
    this.service = new ScoreService(this);
    this.service.getScores();
    this.scores = [];

  }

  showScores(scores) {
    this.scores = scores;
    this.view.showScore(scores);
  }
}
