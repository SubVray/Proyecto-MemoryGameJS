import {DifficultyView } from '../../views/difficultyView/difficultyView.js'
import {DifficultyService } from '../../services/difficultyService/difficultyService.js'


export class DifficultyController {
  constructor() {
    this.view = new DifficultyView(this);
    this.service = new DifficultyService(this);
  }
  showView() {
    this.view.showDifficultyView();
  }
}
