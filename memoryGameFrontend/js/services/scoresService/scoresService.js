export class ScoresService {
  constructor(controller) {
    this.controller = controller;
    this.getData();
  }

  getData() {
    this.controller.showView([]);
  }
}
