import { div } from "../libs/html.js";

export class View {
  constructor(controller, parent) {
    this.controller = controller;
    this.parent = parent;
    this.container = div({}, this.parent);
    this.container.style.transform = `translateX(${window.innerWidth}px)`;
    this.callback = null;
    this.show();
  }
  delete() {
    this.parent.removeChild(this.container);
  }

  show() {
    gsap.to(this.container, { x: 0, duration: 1, ease: "none" });
  }
  hide(callback, state) {
    this.callback = callback;
    gsap.to(this.container, {
      x: window.innerWidth,
      duration: 1,
      onComplete: this.hideComplete.bind(this, state),
    });
  }

  hideComplete(state) {
    this.callback(state);
  }
}
