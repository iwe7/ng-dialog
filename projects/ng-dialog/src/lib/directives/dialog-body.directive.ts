import { Directive, Injector } from "@angular/core";
import { ReactComponent } from "../react-component";
@Directive({
  selector: '[dialogBody]'
})
export class DialogBodyDirective extends ReactComponent {
  constructor(injector: Injector) {
    super("body", injector);
  }
}

