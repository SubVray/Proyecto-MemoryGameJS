import { HomeController } from "./controllers/home/homeController.js";
import { ScoresController } from "./controllers/scores/scoresController.js";
import { DifficultyController } from "./controllers/difficulty/difficultyController.js";
import { ThemesController } from "./controllers/themes/themesController.js";
import { PlayController } from "./controllers/play/playController.js";
import { LoginController } from "./controllers/login/loginController.js";
import {
  CREDITS_STATE,
  DIFFICULTY_EASY,
  DIFFICULTY_STATE,
  HOME_STATE,
  LOGIN_STATE,
  PLAY_STATE,
  SCORES_STATE,
  THEMES_STATE,
  THEME_FOOD,
} from "./libs/constants.js";
import { CreditsController } from "./controllers/credits/creditsController.js";

export class GameManager {
  constructor() {
    this.difficulty = DIFFICULTY_EASY;
    this.theme = THEME_FOOD;
    this.username = "";
    this.controller = null;
    this.$navigationContainer = document.getElementById("navigation-container");
    this.$contentContainer = document.getElementById("content-container");
    this.$backButton = document.getElementById("btn-back");
    this.$title = document.getElementById("title-navigation");
    this.$backButton.addEventListener(
      "click",
      this.goTo.bind(this, HOME_STATE)
    );

    this.$contentContainer.addEventListener("home-button-click", (event) => {
      this.presenting(event.detail.state);
    });

    this.$contentContainer.addEventListener("hide-complete", (event) => {
      this.presenting(event.detail.state);
    });

    this.$contentContainer.addEventListener("save-difficulty", (event) => {
      this.difficulty = event.detail.difficulty;
      this.saveDifficulty();
    });

    this.$contentContainer.addEventListener("save-theme", (event) => {
      this.theme = event.detail.theme;
      this.saveTheme();
    });
    this.$contentContainer.addEventListener("user-login", (event) => {
      this.username = event.detail.username;
      this.saveUsername();
      this.goTo(HOME_STATE);
    });

    this.loadDifficulty();
    this.loadTheme();
    this.loadUsername();

    this.presenting(HOME_STATE);
  }

  presenting(state) {
    if (this.controller !== null) {
      this.controller.delete();
      this.controller = null;
    }

    this.$backButton.classList.remove("hidden");
    switch (state) {
      case LOGIN_STATE:
        this.$title.innerHTML = "LOGIN";
        this.$title.className = "title-l ";
        this.username = "";
        this.saveUsername();
        this.controller = new LoginController(this, this.$contentContainer); // this es el GameManager
        break;
      case HOME_STATE:
        this.$title.innerHTML = "HOME";
        this.$title.className = "title-home";
        this.$backButton.classList.add("hidden");
        this.controller = new HomeController(this, this.$contentContainer);
        break;
      case PLAY_STATE:
        this.$title.innerHTML = "GAME";
        this.$title.className = "title-l ";
        this.controller = new PlayController(this, this.$contentContainer);
        break;
      case SCORES_STATE:
        this.$title.innerHTML = "SCORES";
        this.$title.className = "title-l ";
        this.controller = new ScoresController(this, this.$contentContainer);
        break;
      case DIFFICULTY_STATE:
        this.$title.innerHTML = "DIFFICULTY";
        this.$title.className = "title-l title-difficulty ";
        this.controller = new DifficultyController(
          this,
          this.$contentContainer
        );
        break;
      case THEMES_STATE:
        this.$title.innerHTML = "THEMES";
        this.$title.className = "title-l ";
        this.controller = new ThemesController(this, this.$contentContainer);
        break;
      case CREDITS_STATE:
        this.$title.innerHTML = "CREDITS";
        this.$title.className = "title-l ";
        this.controller = new CreditsController(this, this.$contentContainer);
        break;
    }
  }

  goTo(state) {
    if (this.controller !== null) {
      this.controller.hide(state);
    } else {
      this.presenting(state);
    }
  }

  loadDifficulty() {
    if (localStorage.getItem("difficulty")) {
      this.difficulty = localStorage.getItem("difficulty");
    }
  }

  saveDifficulty() {
    localStorage.setItem("difficulty", this.difficulty);
  }

  loadTheme() {
    if (localStorage.getItem("theme")) {
      this.theme = localStorage.getItem("theme");
    }
  }

  saveTheme() {
    localStorage.setItem("theme", this.theme);
  }

  saveUsername() {
    localStorage.setItem("username", this.username);
  }
  loadUsername() {
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
  }
}
