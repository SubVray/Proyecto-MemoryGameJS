import { DifficultyController } from "./controllers/difficultyController/difficultyController.js";
import { CreditsController } from "./controllers/creditsController/creditsController.js";
import { LoginController } from "./controllers/loginController/logincontroller.js";
import { MenuController } from "./controllers/menuController/menuController.js";
import { PlayController } from "./controllers/playController/playController.js";
import { ScoresController } from "./controllers/scoresController/scoresController.js";

window.addEventListener("load", init, false);
function init() {
  /*
        Hagan las clases y sus relaciones.
        MenuController
        PlayController
        ScoresController
        LoginController
        DifficultyController
        CreditsController
  */
  let menuController = new MenuController();
  let playController = new PlayController();
  let scoresController = new ScoresController();
  let loginController = new LoginController();
  let difficultyController = new DifficultyController()
  let creditsController = new CreditsController();
}
