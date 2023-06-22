import { View } from "../view.js";

export class MenuView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "menu-view";

    let loginBtn = document.createElement("button");
    this.container.appendChild(loginBtn);
    loginBtn.innerHTML = "Login";
    loginBtn.className = "btn-menu login-button";
    let playBtn = document.createElement("button");
    this.container.appendChild(playBtn);
    playBtn.innerHTML = "Play";
    playBtn.className = "btn-menu play-button";
    let scoreBtn = document.createElement("button");
    this.container.appendChild(scoreBtn);
    scoreBtn.innerHTML = "Scores";
    scoreBtn.className = "btn-menu play-button";
    let difficultyBtn = document.createElement("button");
    this.container.appendChild(difficultyBtn);
    difficultyBtn.innerHTML = "Difficulty";
    difficultyBtn.className = "btn-menu play-button";
    let themesBtn = document.createElement("button");
    this.container.appendChild(themesBtn);
    themesBtn.innerHTML = "Themes";
    themesBtn.className = "btn-menu play-button";
    let creditsBtn = document.createElement("button");
    this.container.appendChild(creditsBtn);
    creditsBtn.innerHTML = "Credits";
    creditsBtn.className = "btn-menu play-button";
  }
}
