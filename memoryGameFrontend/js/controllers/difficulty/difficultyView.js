import {
  DIFFICULTY_EASY,
  DIFFICULTY_HARD,
  DIFFICULTY_MEDIUM,
} from "../../libs/constants.js";
import { button, span } from "../../libs/html.js";
import { View } from "../view.js";

export class DifficultyView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.id = "difficulty-view";
    this.elementsContainer.className = "bg  difficulty-view";

    let easyBtn = button(
      {
        innerHTML: "Easy",
        className: "btn-difficulty",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_EASY),
      },
      this.elementsContainer
    );
    let mediumBtn = button(
      {
        innerHTML: "Medium",
        className: "btn-difficulty",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_MEDIUM),
      },
      this.elementsContainer
    );
    let hardBtn = button(
      {
        innerHTML: "Hard",
        className: "btn-difficulty",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_HARD),
      },
      this.elementsContainer
    );
    let easyStar = span({ innerHTML: "⭐", className: "star" }, easyBtn);
    let mediumStar = span({ innerHTML: "⭐⭐", className: "star" }, mediumBtn);
    let hardStar = span({ innerHTML: "⭐⭐⭐", className: "star" }, hardBtn);
  }

  onButtonClick(difficulty) {
    var event = new CustomEvent("save-difficulty", {
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
