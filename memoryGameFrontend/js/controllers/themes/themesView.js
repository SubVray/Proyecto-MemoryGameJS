import { View } from "../view.js";

export class ThemesView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "container themes-view";

    let foodBtn = document.createElement("button");
    let facesBtn = document.createElement("button");
    let flagsBtn = document.createElement("button");

    foodBtn.innerHTML = "Food";
    facesBtn.innerHTML = "Faces";
    flagsBtn.innerHTML = "Flags";

    foodBtn.className = "btn-menu login-button";
    facesBtn.className = "btn-menu play-button";
    flagsBtn.className = "btn-menu play-button";

    this.container.appendChild(foodBtn);
    this.container.appendChild(facesBtn);
    this.container.appendChild(flagsBtn);
  }
}
