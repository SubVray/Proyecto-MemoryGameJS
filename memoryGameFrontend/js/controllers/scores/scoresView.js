import { View } from "../view.js";

export class ScoresView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "scores-view";

    let card = document.createElement("div");
    let cardHeader = document.createElement("div");
    let cardBody = document.createElement("div");
    let username = document.createElement("p");
    let clicks = document.createElement("p");
    let time = document.createElement("p");
    let score = document.createElement("p");

    username.innerHTML = "Username";
    clicks.innerHTML = "Clicks: 30";
    time.innerHTML = "Time: 50";
    score.innerHTML = "Score: 50";

    card.className = "card";
    cardHeader.className = "card-header";
    cardBody.className = "card-body";
    username.className = "username";
    clicks.className = "clicks";
    time.className = "time";
    score.className = "score";

    card.appendChild(cardHeader);
    cardHeader.appendChild(username);
    cardBody.appendChild(clicks);
    cardBody.appendChild(time);
    cardBody.appendChild(score);
    card.appendChild(cardBody);
    this.container.appendChild(card);
  }
}
