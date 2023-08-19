import { div, span } from "../libs/html.js";
import { View } from "./view.js";

export class CardView extends View {
  constructor(parent, card, classNameCard, classNameIcon) {
    super(parent);
    this.card = card;
    this.container.className = classNameCard; //! card container card box

    this.cardGame = div({ className: "base-card" }, this.container);
    this.cardFront = div({ className: "front" }, this.cardGame);
    this.cardBack = div({ className: "front back" }, this.cardGame);

    this.cardIconFront = span(
      { innerHTML: ``, className: `${classNameIcon}` },
      this.cardFront
    );
    this.cardIconBack = span(
      { innerHTML: `${this.card.icon}`, className: `${classNameIcon}` },
      this.cardBack
    );

    this.container.onclick = this.onSelected.bind(this);
    window.addEventListener("show-card-on-selected", (event) => {
      this.showOnSelected();
    });

    window.addEventListener("show-card-on-discovered", (event) => {
      this.showOnDiscovered();
    });
    window.addEventListener("hide-selected-card", (event) => {
      this.hide();
    });
  }
  onSelected() {
    this.card.isSelected = true;

    let customEvent = new CustomEvent("card-selected", {
      detail: {
        card: this.card,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });
    this.container.dispatchEvent(customEvent);
  }

  showOnSelected() {
    if (this.card.isSelected) {
      // ? agrega la clase card-selected para hacer que haga la animación 3D
      this.cardGame.classList.add("card-selected");
      this.cardBack.classList.add("icon-selected");
    }
  }
  showOnDiscovered() {
    if (this.card.isSelected && !this.card.isDiscovered) {
      this.card.isDiscovered = true;
      let winSound = new Audio("../../../src/sounds/cardsDiscovered.mp3");
      setTimeout(() => {
        winSound.play();
        // ? agrega la clase card-selected para hacer que haga la animación 3D
        this.cardGame.classList.remove("card-selected");
        this.cardGame.classList.add("card-discovered");
        this.cardBack.classList.remove("icon-selected");
        this.cardBack.classList.add("icon-discovered");
        this.container.onclick = null;
        window.removeEventListener("show-card-on-selected", (event) => {
          this.showOnSelected();
        });

        window.removeEventListener("show-card-on-discovered", (event) => {
          this.showOnDiscovered();
        });
        window.removeEventListener("hide-selected-card", (event) => {
          this.hide();
        });
      }, 550);
    }
  }

  hide() {
    let winSound = new Audio("../../../src/sounds/cardsError.mp3");
    if (this.card.isSelected && !this.card.isDiscovered) {
      winSound.play();
      this.card.isSelected = false;
      this.cardGame.classList.remove("card-selected");
      this.cardGame.classList.remove("card-discovered");
    }
  }
}
