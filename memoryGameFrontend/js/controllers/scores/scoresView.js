import { div, p, img } from "../../libs/html.js";
import { View } from "../view.js";

export class ScoresView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "bg scores-view";
    let cardContainer = div({ className: "card-container" }, this.container);

    let gh = [1, 1, 1, 1, 1, 1];
    gh.forEach((element) => {
      let card = div({ className: "card" }, cardContainer);
      let cardBodyLeft = div({ className: "card-body-left" }, card);
      //start wave
      let waveContainer = div({ className: "wave-container" }, card);
      let wave1 = div({ className: "wave" }, waveContainer);
      let wave2 = div({ className: "wave" }, waveContainer);
      let wave3 = div({ className: "wave" }, waveContainer);
      //wave end
      let cardBodyRight = div({ className: "card-body-right" }, card);
      let username = p(
        { innerHTML: `Username`, className: "username" },
        cardBodyLeft
      );
      let clicks = p(
        { innerHTML: `Clicks: ${30}`, className: "clicks" },
        cardBodyLeft
      );
      let time = p({ innerHTML: "Time: 50", className: "time" }, cardBodyLeft);
      let scoreData = p(
        { innerHTML: `${50}`, className: "score-data" },
        cardBodyRight
      );
      let score = p({ innerHTML: `Score`, className: "score" }, cardBodyRight);
    });
  }
}
