import { Directive, Injector } from "@angular/core";
import { ReactComponent } from "../react-component";

@Directive({
  selector: "[dialogMask]"
})
export class DialogMaskDirective extends ReactComponent {
  constructor(injector: Injector) {
    super("mask", injector);
  }
}
