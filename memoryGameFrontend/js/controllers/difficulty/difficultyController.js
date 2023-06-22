import { DifficultyView } from "../difficulty/difficultyView.js";
import { Controller } from "../controller.js";

export class DifficultyController extends Controller {
  constructor(gameManager, parent) {
    super(gameManager);
    this.view = new DifficultyView(this, parent);
  }
}
