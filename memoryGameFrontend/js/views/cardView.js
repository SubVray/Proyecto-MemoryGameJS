import { div, span } from "../libs/html.js";
import { View } from "./view.js";

export class CardView extends View {
  constructor(parent, card, classNameCard, classNameIcon) {
    super(parent);
    this.card = card;
    this.container.className = `base-card ${classNameCard}`; //! card container card box

    this.cardFront = div({ className: "card-face card-front" }, this.container);

    this.cardBack = div({ className: "card-face  card-back" }, this.container);

    this.cardIconFront = span(
      { innerHTML: `${this.card.icon}`, className: `${classNameIcon}` },
      this.cardFront
    );

    this.container.onclick = this.onSelected.bind(this);

    window.addEventListener("show-card-on-selected", (event) => {
      this.showOnSelected();
    });

    window.addEventListener("show-card-on-discovered", (event) => {
      this.showOnDiscovered();
    });

    window.addEventListener("hide-selected-card", (event) => {
      this.hide();
    });

    gsap.to(".base-card", {
      opacity: 1,
      stagger: {
        each: 0.5,
        grid: "auto",
        from: "start",
        amount: 0.5,
        ease: "power2.inOut",
      },
    });
  }

  onSelected() {
    this.card.isSelected = true;
    let customEvent = new CustomEvent("card-selected", {
      detail: {
        card: this.card,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });
    this.container.dispatchEvent(customEvent);
  }

  showOnSelected() {
    if (this.card.isSelected) {
      gsap.to(this.container, {
        duration: 0.5,
        rotationY: "180",
        ease: "linear",
      });
    }
  }
  showOnDiscovered() {
    if (this.card.isSelected && !this.card.isDiscovered) {
      this.card.isDiscovered = true;
      var showOnDiscoveredTimeOut = setTimeout(() => {
        this.container.onclick = null;

        window.removeEventListener("show-card-on-selected", (event) => {
          this.showOnSelected();
        });

        window.removeEventListener("show-card-on-discovered", (event) => {
          this.showOnDiscovered();
        });

        window.removeEventListener("hide-selected-card", (event) => {
          this.hide();
        });

        this.discoveredAnimation();
        clearTimeout(showOnDiscoveredTimeOut);
      }, 550);
    }
  }
  discoveredAnimation() {
    gsap.set(this.cardFront, {
      backgroundColor: "#fffd6f",
      border: "1px solid rgba(49, 49, 49, 0.267)",
      boxShadow: "0 0 1.5px 0.5px black",
      duration: 0,
      ease: "linear",
    });
    const duration = 0.2;
    gsap.set(this.container, { scale: 1, ease: "linear" });
    const animation = gsap.timeline({ repeat: 0, yoyo: false, ease: "linear" });
    animation
      .to(this.container, { duration, scale: 1.05, ease: "linear" }) // 25% - Scale up
      .to(this.container, { duration, scale: 1, ease: "linear" }) // 50% - Scale down
      .to(this.container, { duration, scale: 1.05, ease: "linear" }) // 75% - Scale up
      .to(this.container, { duration, scale: 1, ease: "linear" }); // 100% - Scale down
  }
  hide() {
    if (this.card.isSelected && !this.card.isDiscovered) {
      this.card.isSelected = false;
      gsap.to(this.container, {
        duration: 0.6,
        rotationY: "0",
        ease: "linear",
      });
    }
  }
}
