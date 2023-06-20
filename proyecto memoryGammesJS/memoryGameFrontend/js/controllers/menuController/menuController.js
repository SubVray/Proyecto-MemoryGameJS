import { MenuService } from "../../services/menuService/menuService.js";
import { MenuView } from "../../views/menuView/menuView.js";

export class MenuController {
  constructor() {
    this.view = new MenuView(this);
    this.service = new MenuService(this);
  }
  showView() {
    this.view.showMenuView();
  }
}
