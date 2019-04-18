import { Component, OnInit } from '@angular/core';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.css']
})
export class RecordPageComponent implements OnInit {

  constructor(public movementService: MovementService) { }

  ngOnInit() {
  }

}
