import { GameManager } from "./gameManager.js";

window.addEventListener("load", init, false);
function init() {
  const gameManager = new GameManager();
  let mainContainer = document.querySelector(".main-container");
  mainContainer.addEventListener("click", (e) => {
    if (e.target && e.target.tagName == "BUTTON") {
      new Audio("../../../src/sounds/click.mp3").play();
    }
  });
}
