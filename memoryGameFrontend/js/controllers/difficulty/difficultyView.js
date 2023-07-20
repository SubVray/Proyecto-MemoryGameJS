import {
  DIFFICULTY_EASY,
  DIFFICULTY_HARD,
  DIFFICULTY_MEDIUM,
} from "../../libs/constants.js";
import { button, span } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class DifficultyView extends ControllerView {
  constructor(controller, parent, difficultyActive) {
    super(controller, parent);
    this.container.id = "difficulty-view";
    this.elementsContainer.className = "bg  difficulty-view";
    this.difficultyActive = difficultyActive;

    this.easyBtn = button(
      {
        innerHTML: "Easy",
        className:
          difficultyActive == 8
            ? "btn-difficulty active-difficulty"
            : "btn-difficulty ",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_EASY),
      },
      this.elementsContainer
    );
    this.mediumBtn = button(
      {
        innerHTML: "Medium",
        className:
          difficultyActive == 12
            ? "btn-difficulty active-difficulty"
            : "btn-difficulty ",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_MEDIUM),
      },
      this.elementsContainer
    );
    this.hardBtn = button(
      {
        innerHTML: "Hard",
        className:
          difficultyActive == 16
            ? "btn-difficulty active-difficulty"
            : "btn-difficulty ",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_HARD),
      },
      this.elementsContainer
    );
    let easyStar = span({ innerHTML: "⭐", className: "star" }, this.easyBtn);
    let mediumStar = span(
      { innerHTML: "⭐⭐", className: "star" },
      this.mediumBtn
    );
    let hardStar = span(
      { innerHTML: "⭐⭐⭐", className: "star" },
      this.hardBtn
    );
  }

  onButtonClick(difficulty) {
    this.difficultyActive = difficulty;
    if (this.difficultyActive == 8) {
      this.easyBtn.className = `btn-difficulty active-difficulty `;
      this.mediumBtn.className = `btn-difficulty  `;
      this.hardBtn.className = `btn-difficulty  `;
    } else if (this.difficultyActive == 12) {
      this.easyBtn.className = `btn-difficulty  `;
      this.mediumBtn.className = `btn-difficulty active-difficulty `;
      this.hardBtn.className = `btn-difficulty  `;
    } else if (this.difficultyActive == 16) {
      this.easyBtn.className = `btn-difficulty  `;
      this.mediumBtn.className = `btn-difficulty  `;
      this.hardBtn.className = `btn-difficulty active-difficulty `;
    }

    let event = new CustomEvent("save-difficulty", {
      detail: {
        difficulty: difficulty,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });
    this.container.dispatchEvent(event);
  }
}
