import { View } from "../view.js";

export class DifficultyView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "container difficulty-view";

    let easyBtn = document.createElement("button");
    let mediumBtn = document.createElement("button");
    let hardBtn = document.createElement("button");
    easyBtn.className = "btn-menu ";
    mediumBtn.className = "btn-menu ";
    hardBtn.className = "btn-menu ";
    easyBtn.innerHTML = "Easy";
    mediumBtn.innerHTML = "Medium";
    hardBtn.innerHTML = "Hard";
    this.container.appendChild(easyBtn);
    this.container.appendChild(mediumBtn);
    this.container.appendChild(hardBtn);
  }
}
