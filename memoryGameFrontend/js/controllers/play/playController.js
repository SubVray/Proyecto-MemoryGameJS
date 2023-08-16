import { PlayView } from "../play/playView.js";
import { Controller } from "../controller.js";
import { PlayService } from "./playService.js";

export class PlayController extends Controller {
  constructor(gameManager, parent) {
    super(gameManager);
    this.view = new PlayView(this, parent);
    this.cards = null;
    this.service = new PlayService(this);
    this.service.getCards(this.gameManager.difficulty, this.gameManager.theme);
    this.timer = null;
    this.time = 0;
    this.clicks = 0;

    window.addEventListener("card-selected", () => {
      this.onCardSelected();
    });
    this.hiddenTimer = null;
  }
  showCards(cards) {
    this.cards = cards;
    this.view.showCards(cards);
    this.timer = window.setInterval(this.gameTick.bind(this), 1000);
  }

  resetGame() {
    this.killGameTimer();
    this.timer = null;
    this.time = 0;
    this.clicks = 0;
    this.service.getCards(this.gameManager.difficulty, this.gameManager.theme);
    this.view.updateHUD(this.clicks, this.time);
  }
  gameTick() {
    this.time += 1;
    this.view.updateHUD(this.clicks, this.time);
  }
  onCardSelected() {
    if (this.hiddenTimer !== null) return;
    this.clicks++;
    this.view.updateHUD(this.clicks, this.time);
    let customEvent = new CustomEvent("show-card-on-selected", {
      detail: {
        card: this.card,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });
    this.view.container.dispatchEvent(customEvent);

    let cardSelected1 = null;
    let cardSelected2 = null;

    this.cards.forEach((card) => {
      if (!card.isDiscovered) {
        if (cardSelected1 === null && card.isSelected) {
          cardSelected1 = card;
        } else if (cardSelected2 === null && card.isSelected) {
          cardSelected2 = card;
        }
      }
    });

    if (cardSelected1 !== null && cardSelected2 !== null) {
      if (cardSelected1.id === cardSelected2.id) {
        let customEvent = new CustomEvent("show-card-on-discovered", {
          detail: {
            card: this.card,
          },
          bubbles: true,
          cancelable: true,
          composed: false,
        });
        this.view.container.dispatchEvent(customEvent);
        // check if game is complete
        if (this.checkGameCompleted()) {
          this.killGameTimer();
          const maxScore = 10000;
          const clickWeight = 0.5;
          const timeWeight = 0.5;
          const clickScore = maxScore / (this.clicks + 1);
          const timeScore = maxScore / (this.time + 1);
          const score = Math.round(
            clickScore * clickWeight + timeScore * timeWeight
          );

          this.service.sendScore(
            score,
            this.clicks,
            this.time,
            this.gameManager.username,
            parseInt(this.gameManager.difficulty)
          );
          // TODO: Show game complete controller?
          let cardsFinished = document.querySelectorAll(".card-game");
          setTimeout(() => {
            cardsFinished.forEach((cardFinished) => {
              cardFinished.classList.add("game-finished");
            });
          }, 500);
          setTimeout(() => {
            cardsFinished.forEach((cardFinished) => {
              cardFinished.classList.remove("game-finished");
            });
            Swal.fire({
              title: "Game completed",
              html: `${this.gameManager.username}<br>Score: ${score}`,
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Play again",
              cancelButtonText: "Home",
            }).then((result) => {
              clearTimeout();
              if (result.isConfirmed) {
                document.querySelector(".btn-reset").click();
              } else {
                document.querySelector("#btn-back").click();
              }
            });
          }, 1500);
        }
      } else {
        this.hiddenTimer = window.setTimeout(() => {
          let customEvent = new CustomEvent("hide-selected-card", {
            detail: {
              card: this.card,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
          });
          this.view.container.dispatchEvent(customEvent);
          window.clearTimeout(this.hiddenTimer);
          this.hiddenTimer = null;
        }, 600);
      }
    }
  }

  killGameTimer() {
    window.clearInterval(this.timer);
    this.timer = null;
  }
  checkGameCompleted() {
    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i];
      if (!card.isDiscovered) {
        return false;
      }
    }
    return true;
  }
}
