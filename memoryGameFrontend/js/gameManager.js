import { HomeController } from "./controllers/home/homeController.js";
import { ScoresController } from "./controllers/scores/scoresController.js";
import { DifficultyController } from "./controllers/difficulty/difficultyController.js";
import { ThemesController } from "./controllers/themes/themesController.js";
import { LoginController } from "./controllers/login/loginController.js";
import { PlayController } from "./controllers/play/playController.js";

export class GameManager {
  constructor() {
    let navigationContainer = document.getElementById("navigation-container");
    this.backButton = document.getElementById("btn-back");
    this.title = document.getElementById("title-navigation");
    let contentContainer = document.getElementById("content-container");
    this.goTo(3, contentContainer);
  }

  goTo(controllerId, contentContainer) {
    switch (controllerId) {
      case 1:
        this.title.innerHTML = "Login";
        this.title.className = "title-login";
        this.backButton.classList.add("disable");
        this.controller = new LoginController(this, contentContainer);
        break;
      case 2:
        this.title.innerHTML = "HOME";
        this.title.className = "title-home";
        this.backButton.classList.add("disable");
        this.controller = new HomeController(this, contentContainer);
        break;
      case 3:
        this.title.innerHTML = "Game";
        this.backButton.classList.remove("disable");
        this.controller = new PlayController(this, contentContainer);
        break;
      case 4:
        this.title.innerHTML = "Scores";
        this.backButton.classList.remove("disable");
        this.controller = new ScoresController(this, contentContainer);
        break;
      case 5:
        this.title.innerHTML = "Difficulty";
        this.backButton.classList.remove("disable");
        this.controller = new DifficultyController(this, contentContainer);
        break;
      case 6:
        this.title.innerHTML = "Themes";
        this.backButton.classList.remove("disable");
        this.controller = new ThemesController(this, contentContainer);
        break;
    }
  }
}
