import { LoginService } from "../../services/loginService/loginService.js";
import { LoginView } from "../../views/loginView/loginView.js";

export class LoginController {
  constructor() {
    this.view = new LoginView(this);
    this.service = new LoginService(this);
  }
  showView() {
    this.view.showLoginView();
  }
}
