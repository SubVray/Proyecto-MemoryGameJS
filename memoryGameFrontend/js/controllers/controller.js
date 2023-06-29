export class Controller {
  constructor(gameManager) {
    this.gameManager = gameManager;
    this.view = null;
    this.service = null;
    this.model = null;
  }

  delete() {
    this.view.delete();
  }
  hide(callBack) {
    this.view.hide(callBack);
  }
}
