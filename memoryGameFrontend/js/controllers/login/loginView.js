import { button, p, img, form, input } from "../../libs/html.js";
import { View } from "../view.js";

export class LoginView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "bg container login-view";

    let logo = img(
      {
        src: "src/images/memory-game.png",
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
      { required: true, placeholder: "Username" },
      formLogin
    );
    let loginBtn = button(
      { innerHTML: "Login", className: "btn-login", type: "button" },
      formLogin
    );

    
  }
}
