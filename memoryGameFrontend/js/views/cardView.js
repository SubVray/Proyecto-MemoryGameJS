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
    this.showOnSelected();
  }

  showOnSelected() {
    if (this.card.isSelected) {
    //   this.container.classList.add("card-selected");
      this.cardGame.classList.add("card-selected");
      this.cardBack.classList.add("icon-selected");
    }
  }
}
