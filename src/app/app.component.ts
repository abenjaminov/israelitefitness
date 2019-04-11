import { Component } from '@angular/core';
import { AppMenuItem } from './side-menu/side-menu.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: Array<AppMenuItem>;
  sideMenuOpen:boolean = false;

  constructor() {

  }

  ngOnInit() {
    this.menuItems = [];
  
    var records = new AppMenuItem("Records",'/records');
    this.menuItems.push(records);

    var standards = new AppMenuItem("Standards",'/standards');
    this.menuItems.push(standards);
  }

  onSideMenuToggleClicked() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }
}
