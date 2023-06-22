import { View } from "../view.js";

export class ScoresView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "scores-view";

    let loginBtn = document.createElement("div");
    this.container.appendChild(loginBtn);
    loginBtn.innerHTML = "Login";
    loginBtn.className = "btn-menu login-button";
    let playBtn = document.createElement("div");
    this.container.appendChild(playBtn);
    playBtn.innerHTML = "Play";
    playBtn.className = "btn-menu play-button";
  }
}
