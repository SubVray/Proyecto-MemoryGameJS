import { div } from "../libs/html.js";

div;
export class View {
  constructor(parent) {
    // ! parent es content-container
    this.parent = parent;
    // ! container esta dentro de content-container
    this.container = div({}, this.parent);
  }
}
