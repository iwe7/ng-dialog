import {
  Injectable,
  Injector,
  ComponentRef,
  TemplateRef,
  Type,
  NgModuleRef
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import {
  NgElementConstructor,
  NgElement,
  NgElementStrategy
} from "@angular/elements";

import { ConfigService } from "./config.service";
import { ElementService } from "./element.service";

@Injectable({
  providedIn: "root"
})
export class DialogService {
  doc: Document;
  zIndex = 1050;

  constructor(
    private config: ConfigService,
    private element: ElementService,
    private injector: Injector,
    private ngModuleRef: NgModuleRef<any>
  ) {
    this.doc = this.injector.get(DOCUMENT);
  }

  show(body) {
    this.zIndex++;
    let ngElementConstructor: NgElementConstructor<any> = this.element.get(
      "rmc-dialog"
    );
    let ngElement: NgElement = new ngElementConstructor(this.injector);
    let ngElementStrategy: NgElementStrategy = (<any>ngElement)
      .ngElementStrategy;
    ngElementStrategy.setInputValue("body", body as any);
    ngElementStrategy.setInputValue("zIndex", this.zIndex + "");
    this.doc.body.appendChild(ngElement);
    let componentRef = (<any>ngElementStrategy).componentRef;
    let instance = componentRef.instance;
    instance.onClose.subscribe(res => {
      this.doc.body.removeChild(ngElement);
    });
  }
}
