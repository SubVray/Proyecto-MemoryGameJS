import { PlayView } from "../play/playView.js";
import { Controller } from "../controller.js";

export class PlayController extends Controller {
  constructor(gameManager, parent, gameNav) {
    super(gameManager);
    this.view = new PlayView(this, parent, gameNav);
  }
}
