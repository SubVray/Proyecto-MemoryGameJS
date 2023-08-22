import { View } from "./view.js";
import { div, p, img } from "../libs/html.js";
export class ScoreView extends View {
  constructor(parent, score) {
    super(parent);
    this.score = score;
    this.container.className = "card";

    let cardBodyLeft = div({ className: "card-body-left" }, this.container);
    //start wave
    let waveContainer = div({ className: "wave-container" }, this.container);
    let wave1 = div({ className: "wave" }, waveContainer);
    let wave2 = div({ className: "wave" }, waveContainer);
    let wave3 = div({ className: "wave" }, waveContainer);
    //wave end
    let cardBodyRight = div({ className: "card-body-right" }, this.container);
    let username = p(
      { innerHTML: `${this.score.username}`, className: "username" },
      cardBodyLeft
    );

    let clicks = p(
      { innerHTML: `Clicks: ${this.score.clicks}`, className: "clicks" },
      cardBodyLeft
    );

    let time = p(
      { innerHTML: `Time: ${this.score.time}`, className: "time" },
      cardBodyLeft
    );

    let difficulty = p(
      {
        innerHTML:
          (this.score.difficulty === 8 && "Mode: Easy") ||
          (this.score.difficulty === 12 && "Mode: Medium") ||
          (this.score.difficulty === 14 && "Mode: Hard"),
        className: "time",
      },
      cardBodyLeft
    );

    let scoreData = p(
      { innerHTML: `${this.score.score}`, className: "score-data" },
      cardBodyRight
    );

    let scoreT = p({ innerHTML: `Score`, className: "score" }, cardBodyRight);
  }
}
