import { ThemesView } from "../themes/themesView.js";
import { Controller } from "../controller.js";


export class ThemesController extends Controller {
  constructor(gameManager, parent) {
    super(gameManager);
    this.view = new ThemesView(this, parent);
  }
}
