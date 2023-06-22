import { View } from "../view.js";

export class MenuView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "menu-view";

    let loginBtn = document.createElement("div");
    this.container.appendChild(loginBtn);
    loginBtn.innerHTML = "Login";
    loginBtn.className = "btn-menu login-button";
    let playBtn = document.createElement("div");
    this.container.appendChild(playBtn);
    playBtn.innerHTML = "Play";
    playBtn.className = "btn play-button";
  }
}
