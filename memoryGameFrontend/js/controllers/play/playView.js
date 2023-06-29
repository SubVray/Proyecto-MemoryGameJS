import { div } from "../../libs/html.js";
import { View } from "../view.js";

export class PlayView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "bg play-view";
    let gh = [1, 1, 1, 1, 1, 1, 1, 1];
    gh.forEach((element) => {
      if (gh.length === 24) {
        let cardGame = div({ className: "card-24" }, this.container);
      } else if (gh.length === 16) {
        let cardGame = div({ className: "card-16" }, this.container);
      } else {
        let cardGame = div({ className: "card-8" }, this.container);
      }
    });
  }
}
