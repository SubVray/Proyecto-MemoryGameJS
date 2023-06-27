import { button, createElement, div } from "../../libs/html.js";
import { View } from "../view.js";

export class HomeView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "container menu-view";

    let loginBtn = button(
      { innerHTML: "Login", className: "btn-menu login-button" },
      this.container
    );

    let playBtn = button(
      { innerHTML: "Play", className: "disable-btn btn-menu play-button" },
      this.container
    );

    let scoreBtn = button(
      { innerHTML: "Scores", className: "disable-btn btn-menu play-button" },
      this.container
    );

    let difficultyBtn = button(
      {
        innerHTML: "Difficulty",
        className: "disable-btn btn-menu play-button",
      },
      this.container
    );

    let themesBtn = button(
      { innerHTML: "Themes", className: "disable-btn btn-menu play-button" },
      this.container
    );

    let creditsBtn = button(
      { innerHTML: "Credits", className: "disable-btn btn-menu play-button" },
      this.container
    );
  }
}
