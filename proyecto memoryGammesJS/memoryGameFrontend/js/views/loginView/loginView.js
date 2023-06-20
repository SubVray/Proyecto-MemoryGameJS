export class LoginView {
  constructor(controller) {
    this.controller = controller;
  }
  showLoginView() {
    let loginView = document.createElement("div");
    loginView.className = "login-view";
    loginView.innerHTML = "Login View";
    document.body.appendChild(loginView);
  }
}
