import { Component } from '@angular/core';
import { AppMenuItem } from './side-menu/side-menu.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: Array<AppMenuItem>;
  selectedMenuItem: AppMenuItem;
  title = 'Israel Elite Fitness';
  sideMenuOpen:boolean = false;

  constructor() {

  }

  ngOnInit() {
    this.menuItems = [];
    
    var home = new AppMenuItem("Home",'/');
    this.menuItems.push(home);

    var records = new AppMenuItem("Records",'/records');
    this.menuItems.push(records);

    this.selectedMenuItem = this.menuItems[0];
  }

  onSideMenuToggleClicked() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }
}
