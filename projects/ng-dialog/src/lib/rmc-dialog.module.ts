import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DialogComponent } from "./dialog/dialog.component";
import { DialogWrapDirective } from "./directives/dialog-wrap.directive";
import { DialogTitleDirective } from "./directives/dialog-title.directive";
import { DialogContentDirective } from "./directives/dialog-content.directive";
import { DialogCloseDirective } from "./directives/dialog-close.directive";
import { DialogHeaderDirective } from "./directives/dialog-header.directive";
import { DialogBodyDirective } from "./directives/dialog-body.directive";
import { DialogFooterDirective } from "./directives/dialog-footer.directive";
import { DialogDirective } from "./directives/dialog.directive";
import { DialogMaskDirective } from "./directives/dialog-mask.directive";
import { DialogCloseXDirective } from "./directives/dialog-close-x.directive";
import { PipeNgModule } from 'lodash-pipes';
import { IsTemplateRefPipe, IsTypePipe } from './pipe';
@NgModule({
  imports: [CommonModule],
  declarations: [
    DialogComponent,
    DialogWrapDirective,
    DialogTitleDirective,
    DialogContentDirective,
    DialogCloseDirective,
    DialogHeaderDirective,
    DialogBodyDirective,
    DialogFooterDirective,
    DialogDirective,
    DialogMaskDirective,
    DialogCloseXDirective,
    IsTemplateRefPipe,
    IsTypePipe
  ],
  exports: [DialogComponent],
  entryComponents: [DialogComponent]
})
export class RmcDialogModule {}
