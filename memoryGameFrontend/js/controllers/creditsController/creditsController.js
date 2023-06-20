import { CreditsService } from "../../services/creditsService/creditsService.js";
import { CreditsView } from "../../views/creditsView/creditsView.js";

export class CreditsController {
  constructor() {
    this.view = new CreditsView(this);
    this.service = new CreditsService(this);
  }
  showView() {
    this.view.showCreditsView();
  }
}
