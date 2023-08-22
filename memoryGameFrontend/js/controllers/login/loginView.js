import { button, p, img, form, input } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class LoginView extends ControllerView {
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

    let formLogin = form(
      { className: "form-login", onsubmit: this.onLogin.bind(this) },
      this.elementsContainer
    );

    this.usernameInput = input(
      { required: true, placeholder: "Username" },
      formLogin
    );

    this.loginBtn = button(
      {
        innerHTML: "Login",
        className: "btn-login",
        type: "submit",
        // onclick: this.onLogin.bind(this),
      },
      formLogin
    );
  }

  onLogin() {
    let username = this.usernameInput.value;
    if (!username == "") {
      let customEvent = new CustomEvent("user-login", {
        detail: {
          username: username,
        },
        bubbles: true,
        cancelable: true,
        composed: false,
      });
      this.container.dispatchEvent(customEvent);
    }
  }
}
