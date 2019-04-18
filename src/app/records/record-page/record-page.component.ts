import { Component, OnInit } from '@angular/core';
import { MovementService } from 'src/app/services/movement.service';
import { Record } from '../records.service';

@Component({
  selector: 'app-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.css']
})
export class RecordPageComponent implements OnInit {

  selectedRecord: Record;

  constructor(public movementService: MovementService) { }

  ngOnInit() {
  }

}
