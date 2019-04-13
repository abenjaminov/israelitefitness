import { Component, OnInit } from '@angular/core';
import { PopupData } from 'src/app/services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  data: PopupData;

  constructor() { }

  ngOnInit() {
  }

}
