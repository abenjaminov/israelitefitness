import { Injectable, ComponentFactoryResolver } from "@angular/core";
import { ComponentHostDirective } from '../components/directives/component-host.directive';
import { PopupComponent } from '../components/popup/popup.component';

export class PopupData {
    title:string;
}

@Injectable()
export class PopupService {
    popupHost: ComponentHostDirective;

    constructor(private componentFactoryResolve: ComponentFactoryResolver) {

    }

    setHost(host: ComponentHostDirective) {
        this.popupHost = host;
    }

    showPopup(popupData: PopupData) {
        var componentFactory = this.componentFactoryResolve.resolveComponentFactory(PopupComponent);
        var viewContainerRef = this.popupHost.viewContainerRef;
        viewContainerRef.clear();

        var componentRef = viewContainerRef.createComponent(componentFactory);
        (<PopupComponent>componentRef.instance).data = popupData;
    }
}