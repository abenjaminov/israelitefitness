import { Component, ViewChild, ElementRef } from '@angular/core';
import { AppMenuItem } from './side-menu/side-menu.component';
import { ComponentHostDirective } from './components/directives/component-host.directive';
import { PopupService } from './services/popup.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: Array<AppMenuItem>;
  sideMenuOpen:boolean = false;

  @ViewChild("componentHost") componentHost: ComponentHostDirective;

  constructor(private popupService: PopupService) {

  }

  ngOnInit() {
    this.menuItems = [];
  
    var records = new AppMenuItem("Records",'/records');
    this.menuItems.push(records);

    // var standards = new AppMenuItem("Standards",'/standards');
    // this.menuItems.push(standards);
  }

  ngAfterContentInit() {
    this.popupService.setHost(this.componentHost);
  }

  onSideMenuToggleClicked() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }
}
