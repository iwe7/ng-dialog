import { Directive, Injector } from "@angular/core";
import { ReactComponent } from "../react-component";
@Directive({
  selector: "[dialogCloseX]"
})
export class DialogCloseXDirective extends ReactComponent {
  constructor(injector: Injector) {
    super("close-x", injector);
  }
}
