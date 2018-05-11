import { Directive, Injector, HostBinding, HostListener } from "@angular/core";
import { ReactComponent } from "../react-component";

@Directive({
  selector: "[dialog]"
})
export class DialogDirective extends ReactComponent {
  @HostListener("click", ["$event"])
  _click(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }
  constructor(injector: Injector) {
    super("", injector);
  }
}
