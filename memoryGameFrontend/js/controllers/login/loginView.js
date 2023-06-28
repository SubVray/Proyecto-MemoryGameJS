import { button, p, img, form, input } from "../../libs/html.js";
import { View } from "../view.js";

export class LoginView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "container login-view";

    let logo = img(
      {
        src: "../../../../memoryGameFrontend/src/images/logo.svg",
        alt: "logo",
        className: "logo",
      },
      this.container
    );
    let text = p(
      {
        innerHTML: "Enter Username to play",
        className: "text-login",
      },
      this.container
    );
    let formLogin = form({ className: "form-login" }, this.container);
    let usernameInput = input(
      { required: true, placeholder: "Username", type: "button" },
      formLogin
    );
    let loginBtn = button(
      { innerHTML: "Login", className: "btn-login" },
      formLogin
    );
  }
}
