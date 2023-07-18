import { HomeView } from "../home/homeView.js";
import { Controller } from "../controller.js";
import { HOME_STATE, LOGIN_STATE } from "../../libs/constants.js";

export class HomeController extends Controller {
  constructor(gameManager, parent, username) {
    super(gameManager);
    this.view = new HomeView(this, parent, username);
  }
  goTo(state) {
    this.gameManager.goTo(state);
  }
}
