import {
  CREDITS_STATE,
  DIFFICULTY_STATE,
  LOGIN_STATE,
  PLAY_STATE,
  SCORES_STATE,
  THEMES_STATE,
} from "../../libs/constants.js";
import { button } from "../../libs/html.js";
import { View } from "../view.js";

export class HomeView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = " container home-view";

    let loginBtn = button(
      {
        innerHTML: "Login",
        className: "btn-menu login-button",
        onclick: this.onButtonClick.bind(this, LOGIN_STATE),
      },
      this.container
    );
    let playBtn = button(
      {
        innerHTML: "Play",
        className: " btn-menu play-button",
        onclick: this.onButtonClick.bind(this, PLAY_STATE),
      },
      this.container
    );
    let scoreBtn = button(
      {
        innerHTML: "Scores",
        className: " btn-menu play-button",
        onclick: this.onButtonClick.bind(this, SCORES_STATE),
      },
      this.container
    );
    let difficultyBtn = button(
      {
        innerHTML: "Difficulty",
        className: " btn-menu play-button",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE),
      },
      this.container
    );
    let themesBtn = button(
      {
        innerHTML: "Themes",
        className: " btn-menu play-button",
        onclick: this.onButtonClick.bind(this, THEMES_STATE),
      },

      this.container
    );
    let creditsBtn = button(
      {
        innerHTML: "Credits",
        className: " btn-menu play-button",
        onclick: this.onButtonClick.bind(this, CREDITS_STATE),
      },
      this.container
    );
  }

  onButtonClick(state, event) {
    if (!event.target.classList.contains("disable-btn")) {
      let customEvent = new CustomEvent("home-button-click", {
        detail: {
          state: state,
        },
        bubbles: true,
        cancelable: true,
        composed: false,
      });
      this.container.dispatchEvent(customEvent);
    }
  }
}
