export class MenuView {
  constructor(controller) {
    this.controller = controller;
  }
  showMenuView() {
    let menuView = document.createElement("div");
    menuView.className = "menu-view";
    menuView.innerHTML = "Menu View";
    document.body.appendChild(menuView);
  }
}
