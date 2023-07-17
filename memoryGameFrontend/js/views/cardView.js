import { div, span } from "../libs/html.js";
import { View } from "./view.js";

export class CardView extends View {
  constructor(parent, card, classNameCard, classNameIcon) {
    super(parent);
    this.card = card;
    this.container.className = classNameCard; //! card container

    span(
      { innerHTML: this.card.icon, className: `${classNameIcon}` },
      this.container
    );
  }
}
