import { THEME_FACES, THEME_FLAGS, THEME_FOOD } from "../../libs/constants.js";
import { button } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class ThemesView extends ControllerView {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.id = "themes-view";
    this.elementsContainer.className = "bg themes-view";

    let foodBtn = button(
      {
        innerHTML: "🍓 Food 🍓",
        className: "btn-theme",
        onclick: this.onButtonClick.bind(this, THEME_FOOD),
      },
      this.elementsContainer
    );
    let facesBtn = button(
      {
        innerHTML: "😁 Faces 😁",
        className: "btn-theme",
        onclick: this.onButtonClick.bind(this, THEME_FACES),
      },
      this.elementsContainer
    );
    let flagsBtn = button(
      {
        innerHTML: "🎌 Flags 🎌",
        className: "btn-theme",
        onclick: this.onButtonClick.bind(this, THEME_FLAGS),
      },
      this.elementsContainer
    );
  }
  onButtonClick(theme) {
    var event = new CustomEvent("save-theme", {
      detail: {
        theme: theme,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });
    this.container.dispatchEvent(event);
  }
}
