import { p } from "../../libs/html.js";
import { View } from "../view.js";

export class CreditsView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "bg container themes-view";

    let foodBtn = p({ innerHTML: "Credits ", className: "" }, this.container);
  }
}
