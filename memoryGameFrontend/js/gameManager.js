import { HomeController } from "./controllers/home/homeController.js";
import { ScoresController } from "./controllers/scores/scoresController.js";
import { DifficultyController } from "./controllers/difficulty/difficultyController.js";
import { ThemesController } from "./controllers/themes/themesController.js";
import { PlayController } from "./controllers/play/playController.js";
import { LoginController } from "./controllers/login/loginController.js";
import {
  DIFFICULTY_STATE,
  HOME_STATE,
  LOGIN_STATE,
  PLAY_STATE,
  SCORES_STATE,
  THEMES_STATE,
} from "./libs/constants.js";

export class GameManager {
  constructor() {
    this.controller = null;
    this.navigationContainer = document.getElementById("navigation-container");
    this.contentContainer = document.getElementById("content-container");
    this.backButton = document.getElementById("btn-back");
    this.title = document.getElementById("title-navigation");
    this.homeController = new HomeController(this, this.contentContainer);
    this.presenting(HOME_STATE);

    this.backButton.addEventListener("click", this.goTo.bind(this, HOME_STATE));
  }

  presenting(state) {
    if (this.controller !== null) {
      this.controller.delete();
      this.controller = null;
    }
    this.backButton.classList.remove("hidden");
    switch (state) {
      case LOGIN_STATE:
        this.title.innerHTML = "Login";
        this.title.className = "title-login";
        this.controller = new LoginController(this, this.contentContainer);
        break;
      case HOME_STATE:
        this.title.innerHTML = "HOME";
        this.title.className = "title-home";
        this.backButton.classList.add("hidden");
        break;
      case PLAY_STATE:
        this.title.innerHTML = "Game";
        this.controller = new PlayController(this, this.contentContainer);
        break;
      case SCORES_STATE:
        this.title.innerHTML = "Scores";
        this.controller = new ScoresController(this, this.contentContainer);
        break;
      case DIFFICULTY_STATE:
        this.title.innerHTML = "Difficulty";
        this.controller = new DifficultyController(this, this.contentContainer);
        break;
      case THEMES_STATE:
        this.title.innerHTML = "Themes";
        this.controller = new ThemesController(this, this.contentContainer);
        break;
    }
  }

  goTo(state) {
    if (this.controller !== null) {
      this.controller.hide(this.presenting.bind(this, state));
    } else {
      this.presenting(state);
    }
  }
}
