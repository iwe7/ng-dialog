import { Component } from "@angular/core";
import { DialogService } from "ng-dialog";
import { TestDialogComponent } from "./test-dialog/test-dialog.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  constructor(public dialog: DialogService) {}
  showComp() {
    this.dialog.show(TestDialogComponent);
  }
}
