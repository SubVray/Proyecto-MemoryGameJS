import { DifficultyController } from "./controllers/difficultyController/difficultyController.js";
import { CreditsController } from "./controllers/creditsController/creditsController.js";
import { LoginController } from "./controllers/loginController/logincontroller.js";
import { MenuController } from "./controllers/menuController/menuController.js";
import { PlayController } from "./controllers/playController/playController.js";
import { ScoresController } from "./controllers/scoresController/scoresController.js";
import { GameManager } from "./gameManager.js";

window.addEventListener("load", init, false);
function init() {
  const gameManager = new GameManager();
}
