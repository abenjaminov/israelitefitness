import { Directive, ViewContainerRef } from "@angular/core";


@Directive( {
    selector : '[comp-host]'
})
export class ComponentHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}