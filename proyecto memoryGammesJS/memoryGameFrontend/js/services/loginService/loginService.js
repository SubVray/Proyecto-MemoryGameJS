export class LoginService {
  constructor(controller) {
    this.controller = controller;
    this.getData();
  }

  getData() {
    this.controller.showView([]);
  }
}
