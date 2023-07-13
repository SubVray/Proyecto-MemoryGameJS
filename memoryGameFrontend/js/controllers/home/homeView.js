import {
  CREDITS_STATE,
  DIFFICULTY_STATE,
  LOGIN_STATE,
  PLAY_STATE,
  SCORES_STATE,
  THEMES_STATE,
} from "../../libs/constants.js";
import { button, div, img } from "../../libs/html.js";
import { View } from "../view.js";

export class HomeView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.id = "home-view";
    this.elementsContainer.className = "bg home-view";

    let logoContainer = div(
      { className: "logo-container" },
      this.elementsContainer
    );
    let logo = img(
      {
        src: "src/images/memory-game.png",
        alt: "logo",
        className: "logo-menu",
      },
      logoContainer
    );

    let loginBtn = button(
      {
        innerHTML: "Login",
        className: "btn-menu login-button",
        onclick: this.onButtonClick.bind(this, LOGIN_STATE),
      },
      this.elementsContainer
    );
    let playBtn = button(
      {
        innerHTML: "Play",
        className: " btn-menu play-button",
        onclick: this.onButtonClick.bind(this, PLAY_STATE),
      },
      this.elementsContainer
    );
    let scoreBtn = button(
      {
        innerHTML: "Scores",
        className: " btn-menu play-button",
        onclick: this.onButtonClick.bind(this, SCORES_STATE),
      },
      this.elementsContainer
    );
    let difficultyBtn = button(
      {
        innerHTML: "Difficulty",
        className: " btn-menu play-button",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE),
      },
      this.elementsContainer
    );
    let themesBtn = button(
      {
        innerHTML: "Themes",
        className: " btn-menu play-button",
        onclick: this.onButtonClick.bind(this, THEMES_STATE),
      },

      this.elementsContainer
    );
    let creditsBtn = button(
      {
        innerHTML: "Credits",
        className: " btn-menu play-button",
        onclick: this.onButtonClick.bind(this, CREDITS_STATE),
      },
      this.elementsContainer
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
