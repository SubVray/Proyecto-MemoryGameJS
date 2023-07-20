import { HomeView } from "../home/homeView.js";
import { Controller } from "../controller.js";
import { HOME_STATE, LOGIN_STATE } from "../../libs/constants.js";

export class HomeController extends Controller {
  constructor(gameManager, parent) {
    super(gameManager);
    this.view = new HomeView(this, parent, this.gameManager.username);
  }
  goTo(state) {
    this.gameManager.goTo(state);
  }
}
