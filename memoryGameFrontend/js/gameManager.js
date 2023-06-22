import { MenuController } from "./controllers/menu/menuController.js";

export class GameManager {
  constructor() {
    let navigationContainer = document.getElementById("navigation-container");
    this.backButton = document.getElementById("btn-back");
    this.title = document.getElementById("title-navigation");
    let contentContainer = document.getElementById("content-container");
    this.controller = new MenuController(this, contentContainer);
  }

  goTo(controllerId) {
    switch (controllerId) {
      case 1:
        this.title.innerHTML = "Login";
        break;
    }
  }
}
