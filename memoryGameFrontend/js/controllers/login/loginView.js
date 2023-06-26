import { View } from "../view.js";

export class LoginView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "container login-view";

    let logo = document.createElement("img");
    let form = document.createElement("form");
    let text = document.createElement("p");
    let usernameInput = document.createElement("input");
    let loginBtn = document.createElement("button");

    form.className = "form-login ";
    loginBtn.className = "btn-login ";
    text.className = "text-login";

    logo.src = "../../../../memoryGameFrontend/src/images/logo.png";
    logo.className = "logo";
    text.innerHTML = "Enter Username to play";
    loginBtn.innerHTML = "Login";
    usernameInput.placeholder = "Username";

    this.container.appendChild(logo);
    this.container.appendChild(text);
    this.container.appendChild(form);
    form.appendChild(usernameInput);
    form.appendChild(loginBtn);
  }
}
