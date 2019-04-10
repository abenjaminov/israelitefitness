import { Directive, ElementRef, Renderer2 } from "@angular/core";
import * as $ from 'jquery';


@Directive({
    selector: ".view"
})
export class ViewDirective {
    constructor(private elemRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        var $window = $(window);
        this.renderer.setStyle(this.elemRef.nativeElement,"height",($window.height() - 130) + "px");
    }
}