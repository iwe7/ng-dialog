import { Directive, Injector, Output, EventEmitter } from "@angular/core";
import { ReactComponent } from "../react-component";
import { fromEvent } from "rxjs";
import { tap } from "rxjs/operators";

@Directive({
  selector: "[dialogClose]"
})
export class DialogCloseDirective extends ReactComponent {
  @Output() dialogClose: EventEmitter<any> = new EventEmitter();
  constructor(injector: Injector) {
    super("close", injector);
  }
  ngOnInit() {
    fromEvent(this.ele.nativeElement, "click")
      .pipe(
        tap(res => {
          this.dialogClose.emit(res);
        })
      )
      .subscribe();
  }
}
