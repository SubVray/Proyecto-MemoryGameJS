import { div, p, button } from "../../libs/html.js";
import { View } from "../view.js";

export class PlayView extends View {
  constructor(controller, parent, gameNav) {
    super(controller, parent);
    this.container.className = "bg play-view";
    gameNav.innerHTML = "";
    let gh = [1, 1, 1, 1, 1, 1, 1, 1];
    let container = div({ className: "container" }, this.container);

    let gameNavContainer1 = div({ className: "game-nav-container1" }, gameNav);
    let gameNavContainer2 = div({ className: "game-nav-container2" }, gameNav);
    let clicks = p(
      {
        innerHTML: `Clicks: <span class="data">${40}</span>`,
        className: "clicks",
      },
      gameNavContainer1
    );
    let time = p(
      { innerHTML: `Time: <span class="data">${40}</span>`, className: "time" },
      gameNavContainer1
    );
    let btnReset = button(
      { innerHTML: "Reset", className: "btn-reset", type: "button" },
      gameNavContainer2
    );

    gh.forEach((element) => {
      if (gh.length === 24) {
        let cardGame = div({ className: "card-24" }, container);
      } else if (gh.length === 16) {
        let cardGame = div({ className: "card-16" }, container);
      } else {
        let cardGame = div({ className: "card-8" }, container);
      }
    });
  }
}
