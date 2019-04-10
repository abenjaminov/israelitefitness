import { Component, OnInit } from '@angular/core';
import { RecordService } from './records.service';



@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {


  constructor(public recordService:RecordService) { 
    
  }

  ngOnInit() {
    this.recordService.loadRecords().subscribe(() => {
      console.log(this.recordService.records);
    })
  }
}
