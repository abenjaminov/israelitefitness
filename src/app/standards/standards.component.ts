import { Component, OnInit } from '@angular/core';
import { MovementService, Movement } from '../services/movement.service';

@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.scss']
})
export class StandardsComponent implements OnInit {

  constructor(public movementService: MovementService) { }

  ngOnInit() {
    this.movementService.loadMovements().subscribe(() => {
      
    })
  }

  movementClicked(movement: Movement) {

  }
}