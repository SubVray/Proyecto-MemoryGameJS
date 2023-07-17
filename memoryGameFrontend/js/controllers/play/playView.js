import { div, p, button, span } from "../../libs/html.js";
import { CardView } from "../../views/cardView.js";
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
      { className: "container container-cards" },
      this.elementsContainer
    );
  }

  showCards(cards) {
    this.cardContainer.innerHTML = "";
    let classNameCard = "";
    let classNameIcon = "";
    cards.forEach((card) => {
      if (cards.length === 32) {
        classNameCard = "card-game card-16 ";
        classNameIcon = "icon icon-16";
        let cardView = new CardView(
          this.cardContainer,
          card,
          classNameCard,
          classNameIcon
        );
      } else if (cards.length === 24) {
        classNameCard = "card-game card-12 ";
        classNameIcon = "icon icon-12";
        let cardView = new CardView(
          this.cardContainer,
          card,
          classNameCard,
          classNameIcon
        );
      } else {
        classNameCard = "card-game card-8 ";
        classNameIcon = "icon icon-8";
        let cardView = new CardView(
          this.cardContainer,
          card,
          classNameCard,
          classNameIcon
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

