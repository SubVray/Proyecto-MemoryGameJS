import { PlayView } from "../play/playView.js";
import { Controller } from "../controller.js";
import { PlayService } from "./playService.js";
import { animationConfetti } from "./confettiAnimation.js";

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
    this.gameManager.controller.view.cardContainer.innerHTML = "";
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
        let cardsDiscoveredSoundTimeOut = setTimeout(() => {
          new Audio("../../../src/sounds/cardsDiscovered.mp3").play();
          clearTimeout(cardsDiscoveredSoundTimeOut);
        }, 550);

        let customEvent = new CustomEvent("show-card-on-discovered", {
          detail: {
            card: this.card,
          },
          bubbles: true,
          cancelable: true,
          composed: false,
        });

        this.view.container.dispatchEvent(customEvent);

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

          let cardsFinished = document.querySelectorAll(".base-card");
          let backCards = document.querySelectorAll(".card-back");
          let frontCards = document.querySelectorAll(".card-front");

          let cardsFinishedTimeOut = setTimeout(() => {
            cardsFinished.forEach((cardFinished) => {
              cardFinished.classList.add("game-finished");
            });
            frontCards.forEach((frontCard) => {
              frontCard.style.transform = "rotateY(0deg)";
            });
            backCards.forEach((backCard) => {
              backCard.style.display = "none";
            });
            clearTimeout(cardsFinishedTimeOut);
          }, 500);

          let winSoundTimeOut = setTimeout(() => {
            new Audio("../../../src/sounds/win.mp3").play();

            animationConfetti();

            cardsFinished.forEach((cardFinished) => {
              cardFinished.classList.remove("game-finished");
            });
            backCards.forEach((backCard) => {
              backCard.style.transform = "rotateY(180deg)";
            });
            backCards.forEach((backCard) => {
              backCard.style.display = "flex";
            });

            Swal.fire({
              title: "Game completed",
              html: `${this.gameManager.username}<br>Score: ${score}`,
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Play again",
              cancelButtonText: "Home",
              allowOutsideClick: false,
              allowEscapeKey: false,
            }).then((result) => {
              if (result.isConfirmed) {
                document.querySelector(".btn-reset").click();
              } else {
                document.querySelector("#btn-back").click();
              }
            });
            clearTimeout(winSoundTimeOut);
          }, 1500);
        }
      } else {
        let cardsErrorSoundTimeOut = setTimeout(() => {
          new Audio("../../../src/sounds/cardsError.mp3").play();
          clearTimeout(cardsErrorSoundTimeOut);
        }, 550);

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
