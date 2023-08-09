import { div, img, a, p } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class CreditsView extends ControllerView {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.id = "themes-view";
    this.elementsContainer.className = "bg  themes-view";

    let logoContainer = div({ className: "" }, this.elementsContainer);
    let logo = img(
      {
        src: "src/images/memory-game.png",
        alt: "logo",
        className: "logo-credits",
      },
      logoContainer
    );

    p(
      { innerHTML: "CENFOTEC", className: "text-credits" },
      this.elementsContainer
    );
    p(
      { innerHTML: "Jim Bolaños Zuñiga", className: "text-credits" },
      this.elementsContainer
    );
    p({ innerHTML: "2023", className: "text-credits" }, this.elementsContainer);

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
