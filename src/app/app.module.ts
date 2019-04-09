import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { RecordService } from './records/records.service';

@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
