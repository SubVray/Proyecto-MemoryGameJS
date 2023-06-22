import { MenuController } from "./controllers/menu/menuController.js";

export class GameManager {
  constructor() {
    let navigationContainer = document.getElementById("navigation-container");
    let contentContainer = document.getElementById("content-container");
    this.controller = new MenuController(this, contentContainer);
  }
}
