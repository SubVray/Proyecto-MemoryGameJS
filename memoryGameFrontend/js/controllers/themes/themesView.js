import {
  THEME_FACES,
  THEME_ANIMALS,
  THEME_FOOD,
  THEME_TRANSPORTATION,
} from "../../libs/constants.js";
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
    this.animalsBtn = button(
      {
        innerHTML: "🐶 Animals 🐶",
        className:
          this.themeActive == "animals"
            ? "btn-theme active-theme"
            : "btn-theme",
        onclick: this.onButtonClick.bind(this, THEME_ANIMALS),
      },
      this.elementsContainer
    );
    this.vehiclesBtn = button(
      {
        innerHTML: "🏍️ Vehicles 🏍️",
        className:
          this.themeActive == "transportation"
            ? "btn-theme active-theme"
            : "btn-theme",
        onclick: this.onButtonClick.bind(this, THEME_TRANSPORTATION),
      },
      this.elementsContainer
    );
  }
  onButtonClick(theme) {
    this.themeActive = theme;
    if (this.themeActive == "food") {
      this.foodBtn.className = `btn-btn-theme active-theme`;
      this.facesBtn.className = `btn-difficulty  `;
      this.animalsBtn.className = `btn-difficulty  `;
      this.vehiclesBtn.className = `btn-difficulty  `;
    } else if (this.themeActive == "faces") {
      this.foodBtn.className = `btn-difficulty  `;
      this.facesBtn.className = `btn-difficulty active-theme`;
      this.animalsBtn.className = `btn-difficulty  `;
      this.vehiclesBtn.className = `btn-difficulty  `;
    } else if (this.themeActive == "animals") {
      this.foodBtn.className = `btn-difficulty  `;
      this.facesBtn.className = `btn-difficulty  `;
      this.animalsBtn.className = `btn-difficulty active-theme `;
      this.vehiclesBtn.className = `btn-difficulty  `;
    } else if (this.themeActive == "transportation") {
      this.foodBtn.className = `btn-difficulty  `;
      this.facesBtn.className = `btn-difficulty  `;
      this.animalsBtn.className = `btn-difficulty  `;
      this.vehiclesBtn.className = `btn-difficulty active-theme `;
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
