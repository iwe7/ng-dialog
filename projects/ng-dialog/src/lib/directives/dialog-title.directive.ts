import { Directive, Injector } from "@angular/core";
import { ReactComponent } from "../react-component";

@Directive({
  selector: "[dialogTitle]"
})
export class DialogTitleDirective extends ReactComponent {
  constructor(injector: Injector) {
    super("title", injector);
  }
}
