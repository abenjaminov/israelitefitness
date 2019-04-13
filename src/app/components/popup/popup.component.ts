import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { PopupData, PopupService } from 'src/app/services/popup.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements AfterViewInit {

  data: PopupData;

  @ViewChild("popup") popup: ElementRef;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    var $window = $(window);

    var height = $(this.popup.nativeElement).height();
    var width = $(this.popup.nativeElement).height();

    this.renderer.setStyle(this.popup.nativeElement,"top", (($window.height() / 2) - height / 2) + "px");
    this.renderer.setStyle(this.popup.nativeElement,"left", (($window.width() / 2) - width / 2) + "px");
  }

  closePopup() {
    this.data.closePopup();
  }
}
