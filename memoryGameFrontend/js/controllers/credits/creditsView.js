import { div, img, a } from "../../libs/html.js";
import { View } from "../view.js";

export class CreditsView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "bg container themes-view";

    let logoContainer = div({ className: "" }, this.container);
    let logo = img(
      {
        src: "src/images/memory-game.png",
        alt: "logo",
        className: "logo",
      },
      logoContainer
    );
    let CREATOR = a(
      {
        innerHTML: "Jim Bolaños",
        href: "https://github.com/SubVray",
        className: "link",
        target: "_blank",
      },
      this.container
    );
  }
}
