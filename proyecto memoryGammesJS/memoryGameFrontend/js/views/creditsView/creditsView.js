export class CreditsView {
  constructor(controller) {
    this.controller = controller;
  }
  showcreditsView() {
    let creditsView = document.createElement("div");
    creditsView.className = "credits-view";
    creditsView.innerHTML = "Credits View";
    document.body.appendChild(creditsView);
  }
}
