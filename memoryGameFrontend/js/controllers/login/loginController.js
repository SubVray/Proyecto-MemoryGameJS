import { LoginView } from "../login/loginView.js";
import { Controller } from "../controller.js";


export class LoginController extends Controller {
  constructor(gameManager, parent) {
    super(gameManager);
    this.view = new LoginView(this, parent);
  }
}
