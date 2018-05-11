import { Directive, Injector, HostBinding, Input } from "@angular/core";
import { ReactComponent } from "../react-component";

@Directive({
  selector: "[dialogWrap]"
})
export class DialogWrapDirective extends ReactComponent {
  @HostBinding("class.rmc-dialog-wrap-center")
  @Input()
  center: boolean = true;
  constructor(injector: Injector) {
    super("wrap", injector);
  }
}
