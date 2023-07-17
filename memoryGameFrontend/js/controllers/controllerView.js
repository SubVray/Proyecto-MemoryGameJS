import { div } from "../libs/html.js";
import { View } from "../views/view.js";

export class ControllerView extends View {
  constructor(controller, parent) {
    super(parent); // ! parent es content-container
    this.controller = controller;
    this.fadeContainer = div(
      { className: "controller-view-fade-container" },
      this.container
    );
    this.elementsContainer = div(
      { className: "controller-view-elementsContainer" },
      this.container
    );
    this.elementsContainer.style.transform = `translateX(${window.innerWidth}px)`;

    this.show();
  }
  delete() {
    this.parent.removeChild(this.container);
  }

  show() {
    gsap.to(this.fadeContainer, {
      opacity: 0.75,
      duration: 0.55,
      ease: "expo.out",
    });
    gsap.to(this.elementsContainer, { x: 0, duration: 0.85, ease: "expo.out" });
  }

  hide(state) {
    gsap.to(this.fadeContainer, {
      opacity: 0,
      duration: 0.75,
      ease: "expo.in",
      onComplete: this.hideComplete.bind(this, state),
    });
    gsap.to(this.elementsContainer, {
      x: window.innerWidth,
      duration: 0.5,
      ease: "expo.in",
    });
  }
  hideComplete(state) {
    let customEvent = new CustomEvent("hide-complete", {
      detail: {
        state: state,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });
    this.container.dispatchEvent(customEvent);
  }
}
