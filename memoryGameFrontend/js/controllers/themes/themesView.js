import { THEME_FACES, THEME_FLAGS, THEME_FOOD } from "../../libs/constants.js";
import { button } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class ThemesView extends ControllerView {
  constructor(controller, parent, themeActive) {
    super(controller, parent);
    this.container.id = "themes-view";
    this.elementsContainer.className = "bg themes-view";
    this.themeActive = themeActive;

    this.foodBtn = button(
      {
        innerHTML: "🍓 Food 🍓",
        className:
          this.themeActive == "food" ? "btn-theme active-theme" : "btn-theme",
        onclick: this.onButtonClick.bind(this, THEME_FOOD),
      },
      this.elementsContainer
    );
    this.facesBtn = button(
      {
        innerHTML: "😁 Faces 😁",
        className:
          this.themeActive == "faces" ? "btn-theme active-theme" : "btn-theme",
        onclick: this.onButtonClick.bind(this, THEME_FACES),
      },
      this.elementsContainer
    );
    this.flagsBtn = button(
      {
        innerHTML: "🎌 Flags 🎌",
        className:
          this.themeActive == "flags" ? "btn-theme active-theme" : "btn-theme",
        onclick: this.onButtonClick.bind(this, THEME_FLAGS),
      },
      this.elementsContainer
    );
  }
  onButtonClick(theme) {
    this.themeActive = theme;
    if (this.themeActive == "food") {
      this.foodBtn.className = `btn-btn-theme active-theme`;
      this.facesBtn.className = `btn-difficulty  `;
      this.flagsBtn.className = `btn-difficulty  `;
    } else if (this.themeActive == "faces") {
      this.foodBtn.className = `btn-difficulty  `;
      this.facesBtn.className = `btn-difficulty active-theme`;
      this.flagsBtn.className = `btn-difficulty  `;
    } else if (this.themeActive == "flags") {
      this.foodBtn.className = `btn-difficulty  `;
      this.facesBtn.className = `btn-difficulty  `;
      this.flagsBtn.className = `btn-difficulty active-theme `;
    }

    let event = new CustomEvent("save-theme", {
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
