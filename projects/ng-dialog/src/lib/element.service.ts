import { Injectable, Injector, Type } from "@angular/core";
import { createCustomElement, NgElementConstructor } from "@angular/elements";
import { DialogComponent } from "./dialog/dialog.component";
@Injectable({
  providedIn: "root"
})
export class ElementService {
  map: Map<string, NgElementConstructor<any>> = new Map();
  constructor(private injector: Injector) {
    this.createElement("rmc-dialog", DialogComponent);
  }

  createElement(selector: string, component: Type<any>) {
    let ngElementConstructor: NgElementConstructor<any> = createCustomElement(
      component,
      {
        injector: this.injector
      }
    );
    customElements.define(selector, ngElementConstructor);
    this.map.set(selector, ngElementConstructor);
  }

  get(selector: string): NgElementConstructor<any> {
    return this.map.get(selector);
  }
}
