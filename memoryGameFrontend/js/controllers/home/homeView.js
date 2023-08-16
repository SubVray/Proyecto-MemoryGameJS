import {
  CREDITS_STATE,
  DIFFICULTY_STATE,
  LOGIN_STATE,
  PLAY_STATE,
  SCORES_STATE,
  THEMES_STATE,
} from "../../libs/constants.js";
import { button, div, img, span } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class HomeView extends ControllerView {
  constructor(controller, parent, username) {
    super(controller, parent);
    this.container.id = "home-view";
    this.elementsContainer.className = "bg home-view";
    this.username = username;

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

    this.loginBtn = button(
      {
        innerHTML: this.username ? `${this.username}` : "Login",
        className: this.username ? "btn-menu login-button" : "btn-menu",
        onclick: this.onButtonClick.bind(this, LOGIN_STATE),
      },
      this.elementsContainer
    );

    this.loginBtn.addEventListener("mouseover", () => {
      this.loginBtn.innerHTML = this.username ? "Sign off" : "Login";
    });
    this.loginBtn.addEventListener("mouseout", () => {
      this.loginBtn.innerHTML = this.username ? `${this.username}` : "Login";
    });

    let playBtn = button(
      {
        innerHTML: "Play",
        className: username
          ? "btn-menu play-button"
          : "disable-btn btn-menu play-button",
        onclick: this.onButtonClick.bind(this, PLAY_STATE),
      },
      this.elementsContainer
    );
    let scoreBtn = button(
      {
        innerHTML: "Scores",
        className: username
          ? "btn-menu scores-button"
          : "disable-btn btn-menu play-button",
        onclick: this.onButtonClick.bind(this, SCORES_STATE),
      },
      this.elementsContainer
    );
    let difficultyBtn = button(
      {
        innerHTML: "Difficulty",
        className: username
          ? "btn-menu difficulty-button"
          : "disable-btn btn-menu play-button",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE),
      },
      this.elementsContainer
    );
    let themesBtn = button(
      {
        innerHTML: "Themes",
        className: username
          ? "btn-menu themes-button"
          : "disable-btn btn-menu play-button",
        onclick: this.onButtonClick.bind(this, THEMES_STATE),
      },

      this.elementsContainer
    );
    let creditsBtn = button(
      {
        innerHTML: "Credits",
        className: username
          ? "btn-menu credits-button"
          : "disable-btn btn-menu play-button",
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
