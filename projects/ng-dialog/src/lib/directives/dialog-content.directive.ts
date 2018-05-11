import { Directive, Injector } from "@angular/core";
import { ReactComponent } from "../react-component";
@Directive({
  selector: '[dialogContent]'
})
export class DialogContentDirective extends ReactComponent {
  constructor(injector: Injector) {
    super("content", injector);
  }
}
