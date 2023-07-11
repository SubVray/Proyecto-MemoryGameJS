import { div } from "../libs/html.js";

export class View {
  constructor(controller, parent) {
    this.controller = controller;
    this.parent = parent;
    this.container = div({}, this.parent);
    // this.fadeContainer = div(
    //   { className: "view-fade-container" },
    //   this.container
    // );
    this.container.style.transform = `translateX(${window.innerWidth}px)`;

    this.show();
  }
  delete() {
    this.parent.removeChild(this.container);
  }

  show() {
    gsap.to(this.container, { x: 0, duration: 0.5, ease: "none" });
  }

  hide(state) {
    gsap.to(this.container, {
      x: window.innerWidth,
      duration: 0.5,
      onComplete: this.hideComplete.bind(this, state),
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
