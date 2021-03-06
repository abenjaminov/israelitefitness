import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { RecordService } from './records/records.service';
import { ViewDirective } from './components/directives/view.directive';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { StandardsComponent } from './standards/standards.component';
import { MovementService } from './services/movement.service';
import { PopupService } from './services/popup.service';
import { PopupComponent } from './components/popup/popup.component';
import { ComponentHostDirective } from './components/directives/component-host.directive';
import { RecordPageComponent } from './records/record-page/record-page.component';

@NgModule({
  declarations: [ 
    AppComponent,
    RecordsComponent,
    ViewDirective,
    SideMenuComponent,
    StandardsComponent,
    PopupComponent,
    ComponentHostDirective,
    RecordPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RecordService, MovementService, PopupService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
