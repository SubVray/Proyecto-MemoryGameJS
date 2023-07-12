import { PlayView } from "../play/playView.js";
import { Controller } from "../controller.js";
import { PlayService } from "./playService.js";

export class PlayController extends Controller {
  constructor(gameManager, parent, gameNav) {
    super(gameManager);
    this.view = new PlayView(this, parent, gameNav);
    this.cards = null;
    this.service = new PlayService(this);
    this.service.getCards(this.gameManager.difficulty, this.gameManager.theme);
  }
  showCards(cards) {
    this.cards = cards;
    this.view.showCards(cards);
  }
}
