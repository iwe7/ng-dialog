import { Directive, Injector } from "@angular/core";
import { ReactComponent } from "../react-component";

@Directive({
  selector: "[dialogHeader]"
})
export class DialogHeaderDirective extends ReactComponent {
  constructor(injector: Injector) {
    super("header", injector);
  }
}
