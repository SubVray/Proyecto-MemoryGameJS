export class DifficultyView {
  constructor(controller) {
    this.controller = controller;
  }
  showDifficultyView() {
    let difficultyView = document.createElement("div");
    difficultyView.className = "difficulty-view";
    difficultyView.innerHTML = "Difficulty View";
    document.body.appendChild(difficultyView);
  }
}
