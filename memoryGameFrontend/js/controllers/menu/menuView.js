import { View } from "../view.js";

export class MenuView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "container menu-view";

    let loginBtn = document.createElement("button");
    let playBtn = document.createElement("button");
    let scoreBtn = document.createElement("button");
    let difficultyBtn = document.createElement("button");
    let themesBtn = document.createElement("button");
    let creditsBtn = document.createElement("button");

    loginBtn.innerHTML = "Login";
    playBtn.innerHTML = "Play";
    scoreBtn.innerHTML = "Scores";
    difficultyBtn.innerHTML = "Difficulty";
    themesBtn.innerHTML = "Themes";
    creditsBtn.innerHTML = "Credits";

    loginBtn.className = " btn-menu login-button";
    creditsBtn.className = "disable-btn btn-menu play-button";
    themesBtn.className = "disable-btn btn-menu play-button";
    difficultyBtn.className = "disable-btn btn-menu play-button";
    playBtn.className = "disable-btn btn-menu play-button";
    scoreBtn.className = "disable-btn btn-menu play-button";

    this.container.appendChild(loginBtn);
    this.container.appendChild(playBtn);
    this.container.appendChild(scoreBtn);
    this.container.appendChild(difficultyBtn);
    this.container.appendChild(themesBtn);
    this.container.appendChild(creditsBtn);
  }
}
