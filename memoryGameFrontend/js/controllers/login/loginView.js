import { button, p, img, form, input } from "../../libs/html.js";
import { View } from "../view.js";

export class LoginView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.id = "login-view";
    this.elementsContainer.className = "bg login-view";

    let logo = img(
      {
        src: "src/images/memory-game.png",
        alt: "logo",
        className: "logo",
      },
      this.elementsContainer
    );
    let text = p(
      {
        innerHTML: "Enter Username to play",
        className: "text-login",
      },
      this.elementsContainer
    );
    let formLogin = form({ className: "form-login" }, this.elementsContainer);
    let usernameInput = input(
      { required: true, placeholder: "Username" },
      formLogin
    );
    let loginBtn = button(
      { innerHTML: "Login", className: "btn-login", type: "button" },
      formLogin
    );
  }
}
