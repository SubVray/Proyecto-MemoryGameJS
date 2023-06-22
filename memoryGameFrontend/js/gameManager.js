import { MenuController } from "./controllers/menuController/menuController.js";

export class GameManager {
  constructor() {
    let navigacionContainer = document.getElementById("navigation-container");
    let contentContainer = document.getElementById("content-container");
    this.controller = new MenuController(this, contentContainer);
  }
}
