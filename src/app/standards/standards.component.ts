import { Component, OnInit } from '@angular/core';
import { MovementService } from '../services/movement.service';

@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.scss']
})
export class StandardsComponent implements OnInit {

  constructor(private movementService: MovementService) { }

  ngOnInit() {
    this.movementService.loadMovements().subscribe(() => {
      
    })
  }

}
