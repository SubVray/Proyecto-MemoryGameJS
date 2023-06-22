import { View } from "../view.js";

export class LoginView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "container login-view";

    let logo = document.createElement("img");
    let text = document.createElement("p");
    let usernameInput = document.createElement("input");
    let loginBtn = document.createElement("button");

    loginBtn.className = "btn-login ";
    text.className = "text-login"

    logo.src = "../../../../memoryGameFrontend/src/images/logo.png";
    logo.className = "logo";
    text.innerHTML = "Enter Username to play";
    loginBtn.innerHTML = "Login";
    usernameInput.placeholder = "Username";

    this.container.appendChild(logo);
    this.container.appendChild(text);
    this.container.appendChild(usernameInput);
    this.container.appendChild(loginBtn);
  }
}
