import { Component, OnInit, Input, ElementRef, Renderer2, AfterContentInit, ViewChild, SimpleChanges, OnChanges, Output } from '@angular/core';
import * as velocity from 'velocity-animate'
import * as $ from 'jquery';
import { EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

export class AppMenuItem {
  constructor(private title, public link:string) {

  }
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements AfterContentInit, OnChanges {

  @Input("items") menuItems: Array<AppMenuItem>
  @Input("open") open: boolean;
  @Output() openChange = new EventEmitter();

  menuWidth: number;
  selectedMenuItem: AppMenuItem;

  @ViewChild("menu") menuRef: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["open"] && !changes["open"].firstChange) {
      this.animateMenu();
    }
  }

  ngAfterContentInit(): void {
    this.menuWidth = this.menuRef.nativeElement.clientWidth

    if(this.open) {
      this.renderer.setStyle(this.menuRef.nativeElement, "left","0px");
    }
    else {
      this.renderer.setStyle(this.menuRef.nativeElement,"left", -this.menuWidth + "px")
    }

    this.router.events.subscribe((value) => {
      if(value instanceof NavigationEnd) {
        this.setSelectedMenuItem();
      }
    })
    
  }

  setSelectedMenuItem() {
    for(var i = 0; i <this.menuItems.length; i++) {
      if(this.router.url === this.menuItems[i].link) {
        this.selectedMenuItem = this.menuItems[i];
        return;
      }
    }
  }

  closeMenu($event: MouseEvent) {
    this.open = false;
    this.openChange.emit(this.open);
    this.animateMenu();
  }

  menuItemClicked($event: MouseEvent , menuItem:AppMenuItem) {
    if(this.selectedMenuItem == menuItem) {
      $event.stopPropagation();
      return;
    }

    this.selectedMenuItem = menuItem;
  }

  animateMenu() {
    if(this.open) {
      velocity.animate(this.menuRef.nativeElement,{"left" : 0}, {easing: "easeInOut"});
    } else {
      velocity.animate(this.menuRef.nativeElement,{"left" : -this.menuWidth}, {easing: "easeInOut"});
    }
  }
}