import { Component } from '@angular/core';

class AppMenuItem {
  
  constructor(private title) {

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
    
    var home = new AppMenuItem("Home");
    this.menuItems.push(home);

    var records = new AppMenuItem("Records");
    this.menuItems.push(records);

    var posts = new AppMenuItem("Posts");
    this.menuItems.push(posts);

    this.selectedMenuItem = this.menuItems[0];
  }

  onMenuItemClicked(menuItem: AppMenuItem) {
    this.selectedMenuItem = menuItem;
  }
}
