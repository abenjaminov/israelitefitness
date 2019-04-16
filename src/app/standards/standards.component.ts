import { Component, OnInit } from '@angular/core';
import { MovementService, Movement } from '../services/movement.service';
import { PopupService, PopupData } from '../services/popup.service';

@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.scss']
})
export class StandardsComponent implements OnInit {

  constructor(public movementService: MovementService, private popupService: PopupService) { }

  ngOnInit() {
    this.movementService.loadMovements().subscribe(() => {
      
    })
  }

  movementClicked(movement: Movement) {
    this.popupService.showPopup(new PopupData(movement.name,movement.standardText,'','סרטון התדגה'));
  }
}
