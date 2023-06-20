export class ScoresView {
  constructor(controller) {
    this.controller = controller;
  }
  showScoresView() {
    let scoresView = document.createElement("div");
    scoresView.className = "scores-view";
    scoresView.innerHTML = "Scores View";
    document.body.appendChild(scoresView);
  }
}
