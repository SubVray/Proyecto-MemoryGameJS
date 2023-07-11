import { button } from "../../libs/html.js";
import { View } from "../view.js";

export class ThemesView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "bg themes-view";

    let foodBtn = button(
      { innerHTML: "🍓 Food 🍓", className: "btn-theme" },
      this.container
    );
    let facesBtn = button(
      { innerHTML: "😁 Faces 😁", className: "btn-theme" },
      this.container
    );
    let flagsBtn = button(
      { innerHTML: "🎌 Flags 🎌", className: "btn-theme" },
      this.container
    );
  }
}
