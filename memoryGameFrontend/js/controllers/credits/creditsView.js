import { div, img, a } from "../../libs/html.js";
import { View } from "../view.js";

export class CreditsView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.id = "themes-view";
    this.elementsContainer.className = "bg  themes-view";

    let logoContainer = div({ className: "" }, this.elementsContainer);
    let logo = img(
      {
        src: "src/images/memory-game.png",
        alt: "logo",
        className: "logo",
      },
      logoContainer
    );
    let logoContainerCreator = div(
      { className: "container-logo-creator" },
      this.elementsContainer
    );
    let CREATOR = a(
      {
        innerHTML: "",
        href: "https://github.com/SubVray",
        className: "link",
        target: "_blank",
      },
      logoContainerCreator
    );
    let logoCreator = img(
      {
        src: "src/images/SubVray_Logo_Transparente.png",
        alt: "logo creator",
        className: "logo-creator",
      },
      CREATOR
    );
  }
}
