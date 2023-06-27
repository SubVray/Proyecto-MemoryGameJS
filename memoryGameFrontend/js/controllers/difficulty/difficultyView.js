import { button, createElement, span } from "../../libs/html.js";

import { View } from "../view.js";

export class DifficultyView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "container difficulty-view";

    let easyBtn = button(
      { innerHTML: "Easy", className: "btn-difficulty" },
      this.container
    );

    let mediumBtn = button(
      { innerHTML: "Medium", className: "btn-difficulty" },
      this.container
    );
    let hardBtn = button(
      { innerHTML: "Hard", className: "btn-difficulty" },
      this.container
    );
    let easyStar = span({ innerHTML: "⭐", className: "star" }, easyBtn);
    let mediumStar = span({ innerHTML: "⭐⭐", className: "star" }, mediumBtn);
    let hardStar = span({ innerHTML: "⭐⭐⭐", className: "star" }, hardBtn);
  }
}
