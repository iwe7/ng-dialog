import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RmcDialogModule } from "ng-dialog";
import { TestDialogComponent } from "./test-dialog/test-dialog.component";

@NgModule({
  declarations: [AppComponent, TestDialogComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RmcDialogModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TestDialogComponent]
})
export class AppModule {}
