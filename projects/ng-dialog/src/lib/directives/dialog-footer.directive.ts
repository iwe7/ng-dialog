import { Directive, Injector } from "@angular/core";
import { ReactComponent } from "../react-component";

@Directive({
  selector: "[dialogFooter]"
})
export class DialogFooterDirective extends ReactComponent {
  constructor(injector: Injector) {
    super("footer", injector);
  }
}
