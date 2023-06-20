export class PlayView {
  constructor(controller) {
    this.controller = controller;
  }
  showPlayView() {
    let playView = document.createElement("div");
    playView.className = "play-view";
    playView.innerHTML = "Play View";
    document.body.appendChild(playView);
  }
}
