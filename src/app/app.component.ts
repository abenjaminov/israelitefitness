import { Component } from '@angular/core';

class AppMenuItem {
  
  constructor(private title, private link:string) {

  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: Array<AppMenuItem>;
  selectedMenuItem: AppMenuItem;
  title = 'Israel Elite Fitness';

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

  onMenuItemClicked(menuItem: AppMenuItem) {
    this.selectedMenuItem = menuItem;
  }
}
