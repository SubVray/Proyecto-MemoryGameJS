import { PlayService } from "../../services/playService/playService.js";
import { PlayView } from "../../views/playView/playView.js";

export class PlayController {
  constructor() {
    this.view = new PlayView(this);
    this.service = new PlayService(this);
  }
  showView() {
    this.view.showPlayView();
  }
}
