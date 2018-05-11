import {
  Component,
  OnInit,
  Injector,
  ViewEncapsulation,
  Input,
  HostBinding,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  OnDestroy,
  TemplateRef,
  EventEmitter,
  Output
} from "@angular/core";
import { tap } from "rxjs/operators";
import { Subscription } from "rxjs";

import {
  trigger,
  transition,
  query,
  style,
  animate,
  keyframes
} from "@angular/animations";


import { DialogCloseDirective } from "../directives/dialog-close.directive";
@Component({
  selector: "rmc-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.less"],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger("dialogFade", [
      transition(":enter", [
        style({
          opacity: 0
        }),
        animate(
          "300ms cubic-bezier(0.55, 0, 0.55, 0.2)",
          style({
            opacity: 1
          })
        )
      ]),
      transition(":leave", [
        style({
          opacity: 1
        }),
        animate(
          "300ms cubic-bezier(0.55, 0, 0.55, 0.2)",
          style({
            opacity: 0
          })
        )
      ])
    ]), trigger("dialogZoom", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "scale(0, 0)"
        }),
        animate(
          "300ms cubic-bezier(0.08, 0.82, 0.17, 1)",
          style({
            opacity: 1,
            transform: "scale(1, 1)"
          })
        )
      ]),
      transition(":leave", [
        style({
          opacity: 1,
          transform: "scale(1, 1)"
        }),
        animate(
          "300ms cubic-bezier(0.6, 0.04, 0.98, 0.34)",
          style({
            opacity: 0,
            transform: "scale(0, 0)"
          })
        )
      ])
    ])]
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DialogCloseDirective)
  viewChildDialogCloseDirective: DialogCloseDirective;

  subscription: Subscription;

  @Input() body: any;
  @Input() zIndex: number = 1050;
  @Input() visiable: boolean = true;
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onShow: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnInit() {}
  hide(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.visiable = false;
  }

  animateDone(e: any) {
    if (this.visiable) {
      this.onShow.emit();
    } else {
      this.onClose.emit();
    }
  }

  ngAfterViewInit() {
    this.subscription = this.viewChildDialogCloseDirective.dialogClose
      .pipe(tap(res => this.hide(res)))
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
