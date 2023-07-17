import { div, p, button, span } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class PlayView extends ControllerView {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.id = " play-view";
    this.elementsContainer.className = "bg play-view";

    let navHub = div(
      { id: "game-nav", className: "game-nav bg" },
      this.elementsContainer
    );
    let gameNavContainer1 = div({ className: "game-nav-container1" }, navHub);
    let gameNavContainer2 = div({ className: "game-nav-container2" }, navHub);
    let clicks = p(
      {
        innerHTML: `Clicks: `,
        className: "clicks",
      },
      gameNavContainer1
    );
    this.clickText = span({ innerHTML: `0` }, clicks);

    let time = p({ innerHTML: `Time: `, className: "time" }, gameNavContainer1);
    this.timeText = span({ innerHTML: `0` }, time);

    let btnReset = button(
      {
        innerHTML: "Reset",
        className: "btn-reset",
        type: "button",
        onclick: this.onReset.bind(this),
      },
      gameNavContainer2
    );
    this.cardContainer = div(
      { className: " container" },
      this.elementsContainer
    );
  }
  showCards(cards) {
    this.cardContainer.innerHTML = "";
    cards.forEach((card) => {
      if (cards.length === 32) {
        let cardGame = div(
          { className: "card-game card-hidden card-16" },
          this.cardContainer
        );
        let icon = span(
          { innerHTML: card.icon, className: "icon icon-16" },
          cardGame
        );
      } else if (cards.length === 24) {
        let cardGame = div(
          { className: "card-game card-hidden card-12" },
          this.cardContainer
        );
        let icon = span(
          { innerHTML: card.icon, className: "icon icon-12" },
          cardGame
        );
      } else {
        let cardGame = div(
          { className: "card-game card-hidden card-8" },
          this.cardContainer
        );
        let icon = span(
          { innerHTML: card.icon, className: "icon icon-8" },
          cardGame
        );
      }
    });
  }
  onReset() {
    this.controller.resetGame();
  }
  updateHUD(clicks, time) {
    this.clickText.innerHTML = `${clicks}`;
    this.timeText.innerHTML = `${time}`;
  }
}
