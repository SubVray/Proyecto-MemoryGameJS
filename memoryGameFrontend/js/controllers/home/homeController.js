import { HomeView } from "../home/homeView.js";
import { Controller } from "../controller.js";

export class HomeController extends Controller {
  constructor(gameManager, parent) {
    super(gameManager);
    this.view = new HomeView(this, parent);
  }
}
