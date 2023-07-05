import { div, p } from "../../libs/html.js";
import { View } from "../view.js";

export class ScoresView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "scores-view";
    let gh = [1, 1, 1, 1, 1, 1, 1, 1];
    gh.forEach((element) => {
      let card = div({ className: "card" }, this.container);
      let cardHeader = div({ className: "card-header" }, card);
      let cardBody = div({ className: "card-body" }, card);
      let username = p(
        { innerHTML: `Username`, className: "username" },
        cardHeader
      );
      let clicks = p(
        { innerHTML: "Clicks: 30", className: "clicks" },
        cardBody
      );
      let time = p({ innerHTML: "Time: 50", className: "time" }, cardBody);
      let score = p({ innerHTML: "Score: 50", className: "score" }, cardBody);
    });
  }
}
