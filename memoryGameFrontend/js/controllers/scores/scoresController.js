import { ScoresView } from "../scores/scoresView.js";
import { Controller } from "../controller.js";

export class ScoresController extends Controller {
  constructor(gameManager, parent) {
    super(gameManager);
    this.view = new ScoresView(this, parent);
  }
}
