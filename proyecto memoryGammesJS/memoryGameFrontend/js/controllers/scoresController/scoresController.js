import { ScoresService } from "../../services/scoresService/scoresService.js";
import { ScoresView } from "../../views/scoresView/scoresView.js";

export class ScoresController {
  constructor() {
    this.view = new ScoresView(this);
    this.service = new ScoresService(this);
  }
  showView() {
    this.view.showScoresView();
  }
}
