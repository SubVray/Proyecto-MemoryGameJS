import { View } from "../view.js";

export class PlayView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "play-view";

    let text = document.createElement("p");
    text.innerHTML = "Memory Game";
    this.container.appendChild(text);
  }
}
