import { div, p, button, span } from "../../libs/html.js";
import { View } from "../view.js";

export class PlayView extends View {
  constructor(controller, parent, gameNav) {
    super(controller, parent);
    this.container.id = " play-view";
    this.elementsContainer.className = "bg play-view";
    this.cardContainer = div(
      { className: "container" },
      this.elementsContainer
    );
    gameNav.innerHTML = "";
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
  }
  showCards(cards) {
    console.log(cards.length);
    cards.forEach((card) => {
      if (cards.length === 32) {
        let cardGame = div(
          { className: "card-game card-16" },
          this.cardContainer
        );
        let icon = span(
          { innerHTML: card.icon, className: "icon icon-16" },
          cardGame
        );
      } else if (cards.length === 24) {
        let cardGame = div(
          { className: "card-game card-12" },
          this.cardContainer
        );
        let icon = span(
          { innerHTML: card.icon, className: "icon icon-12" },
          cardGame
        );
      } else {
        let cardGame = div(
          { className: "card-game card-8" },
          this.cardContainer
        );
        let icon = span(
          { innerHTML: card.icon, className: "icon icon-8" },
          cardGame
        );
      }
    });
  }
}
