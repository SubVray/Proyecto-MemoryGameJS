import { MenuView } from "../../views/menuView/menuView.js";
import { Controller } from "../controller.js";

export class MenuController extends Controller {
  constructor(gameManager, parent) {
    super(gameManager);
    this.view = new MenuView(this, parent);
  }
}
