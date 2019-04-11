import { Directive, ElementRef, Renderer2, Input } from "@angular/core";
import * as $ from 'jquery';


@Directive({
    selector: ".view"
})
export class ViewDirective {

    @Input("is-full-screen") isFullScreen: boolean

    constructor(private elemRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        var $window = $(window);
        this.renderer.setStyle(this.elemRef.nativeElement,"height",($window.height() -(this.isFullScreen ? 0 : 130) + "px"));
    }
}